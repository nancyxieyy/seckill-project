/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 781.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 9.0], [3.1, 10.0], [3.2, 11.0], [3.3, 11.0], [3.4, 13.0], [3.5, 13.0], [3.6, 14.0], [3.7, 16.0], [3.8, 18.0], [3.9, 20.0], [4.0, 27.0], [4.1, 37.0], [4.2, 52.0], [4.3, 134.0], [4.4, 181.0], [4.5, 189.0], [4.6, 195.0], [4.7, 198.0], [4.8, 202.0], [4.9, 210.0], [5.0, 212.0], [5.1, 214.0], [5.2, 218.0], [5.3, 225.0], [5.4, 228.0], [5.5, 230.0], [5.6, 232.0], [5.7, 232.0], [5.8, 234.0], [5.9, 236.0], [6.0, 237.0], [6.1, 239.0], [6.2, 239.0], [6.3, 239.0], [6.4, 240.0], [6.5, 240.0], [6.6, 241.0], [6.7, 243.0], [6.8, 244.0], [6.9, 245.0], [7.0, 246.0], [7.1, 246.0], [7.2, 246.0], [7.3, 247.0], [7.4, 247.0], [7.5, 248.0], [7.6, 248.0], [7.7, 249.0], [7.8, 249.0], [7.9, 249.0], [8.0, 249.0], [8.1, 249.0], [8.2, 250.0], [8.3, 250.0], [8.4, 250.0], [8.5, 251.0], [8.6, 251.0], [8.7, 252.0], [8.8, 253.0], [8.9, 253.0], [9.0, 253.0], [9.1, 253.0], [9.2, 254.0], [9.3, 254.0], [9.4, 254.0], [9.5, 254.0], [9.6, 254.0], [9.7, 254.0], [9.8, 254.0], [9.9, 254.0], [10.0, 255.0], [10.1, 255.0], [10.2, 255.0], [10.3, 255.0], [10.4, 255.0], [10.5, 256.0], [10.6, 256.0], [10.7, 256.0], [10.8, 256.0], [10.9, 256.0], [11.0, 257.0], [11.1, 257.0], [11.2, 257.0], [11.3, 258.0], [11.4, 258.0], [11.5, 258.0], [11.6, 258.0], [11.7, 258.0], [11.8, 258.0], [11.9, 259.0], [12.0, 259.0], [12.1, 259.0], [12.2, 259.0], [12.3, 259.0], [12.4, 260.0], [12.5, 260.0], [12.6, 260.0], [12.7, 260.0], [12.8, 260.0], [12.9, 261.0], [13.0, 261.0], [13.1, 261.0], [13.2, 261.0], [13.3, 261.0], [13.4, 261.0], [13.5, 262.0], [13.6, 262.0], [13.7, 262.0], [13.8, 262.0], [13.9, 262.0], [14.0, 262.0], [14.1, 263.0], [14.2, 263.0], [14.3, 263.0], [14.4, 263.0], [14.5, 263.0], [14.6, 263.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 264.0], [15.1, 264.0], [15.2, 264.0], [15.3, 264.0], [15.4, 264.0], [15.5, 265.0], [15.6, 265.0], [15.7, 265.0], [15.8, 265.0], [15.9, 265.0], [16.0, 265.0], [16.1, 265.0], [16.2, 265.0], [16.3, 265.0], [16.4, 266.0], [16.5, 266.0], [16.6, 266.0], [16.7, 266.0], [16.8, 266.0], [16.9, 266.0], [17.0, 266.0], [17.1, 266.0], [17.2, 266.0], [17.3, 266.0], [17.4, 266.0], [17.5, 267.0], [17.6, 267.0], [17.7, 267.0], [17.8, 267.0], [17.9, 267.0], [18.0, 267.0], [18.1, 267.0], [18.2, 268.0], [18.3, 268.0], [18.4, 268.0], [18.5, 268.0], [18.6, 268.0], [18.7, 269.0], [18.8, 269.0], [18.9, 269.0], [19.0, 269.0], [19.1, 269.0], [19.2, 269.0], [19.3, 270.0], [19.4, 270.0], [19.5, 270.0], [19.6, 270.0], [19.7, 271.0], [19.8, 271.0], [19.9, 271.0], [20.0, 272.0], [20.1, 272.0], [20.2, 272.0], [20.3, 272.0], [20.4, 273.0], [20.5, 273.0], [20.6, 273.0], [20.7, 274.0], [20.8, 274.0], [20.9, 274.0], [21.0, 274.0], [21.1, 274.0], [21.2, 275.0], [21.3, 275.0], [21.4, 275.0], [21.5, 275.0], [21.6, 276.0], [21.7, 276.0], [21.8, 276.0], [21.9, 276.0], [22.0, 276.0], [22.1, 276.0], [22.2, 276.0], [22.3, 277.0], [22.4, 277.0], [22.5, 277.0], [22.6, 277.0], [22.7, 277.0], [22.8, 278.0], [22.9, 278.0], [23.0, 278.0], [23.1, 279.0], [23.2, 279.0], [23.3, 279.0], [23.4, 279.0], [23.5, 279.0], [23.6, 280.0], [23.7, 280.0], [23.8, 280.0], [23.9, 281.0], [24.0, 281.0], [24.1, 281.0], [24.2, 282.0], [24.3, 282.0], [24.4, 282.0], [24.5, 282.0], [24.6, 283.0], [24.7, 283.0], [24.8, 283.0], [24.9, 283.0], [25.0, 283.0], [25.1, 283.0], [25.2, 283.0], [25.3, 284.0], [25.4, 284.0], [25.5, 284.0], [25.6, 284.0], [25.7, 284.0], [25.8, 284.0], [25.9, 285.0], [26.0, 285.0], [26.1, 285.0], [26.2, 285.0], [26.3, 285.0], [26.4, 285.0], [26.5, 285.0], [26.6, 285.0], [26.7, 285.0], [26.8, 285.0], [26.9, 286.0], [27.0, 286.0], [27.1, 286.0], [27.2, 286.0], [27.3, 286.0], [27.4, 286.0], [27.5, 286.0], [27.6, 287.0], [27.7, 287.0], [27.8, 287.0], [27.9, 287.0], [28.0, 287.0], [28.1, 287.0], [28.2, 287.0], [28.3, 287.0], [28.4, 288.0], [28.5, 288.0], [28.6, 288.0], [28.7, 288.0], [28.8, 288.0], [28.9, 288.0], [29.0, 288.0], [29.1, 289.0], [29.2, 289.0], [29.3, 289.0], [29.4, 290.0], [29.5, 290.0], [29.6, 290.0], [29.7, 290.0], [29.8, 290.0], [29.9, 290.0], [30.0, 290.0], [30.1, 290.0], [30.2, 291.0], [30.3, 291.0], [30.4, 291.0], [30.5, 291.0], [30.6, 291.0], [30.7, 291.0], [30.8, 291.0], [30.9, 291.0], [31.0, 291.0], [31.1, 292.0], [31.2, 292.0], [31.3, 292.0], [31.4, 292.0], [31.5, 292.0], [31.6, 292.0], [31.7, 292.0], [31.8, 292.0], [31.9, 293.0], [32.0, 293.0], [32.1, 293.0], [32.2, 293.0], [32.3, 293.0], [32.4, 293.0], [32.5, 294.0], [32.6, 294.0], [32.7, 294.0], [32.8, 294.0], [32.9, 294.0], [33.0, 294.0], [33.1, 294.0], [33.2, 294.0], [33.3, 294.0], [33.4, 295.0], [33.5, 295.0], [33.6, 295.0], [33.7, 295.0], [33.8, 295.0], [33.9, 295.0], [34.0, 295.0], [34.1, 295.0], [34.2, 295.0], [34.3, 296.0], [34.4, 296.0], [34.5, 296.0], [34.6, 296.0], [34.7, 296.0], [34.8, 297.0], [34.9, 297.0], [35.0, 297.0], [35.1, 297.0], [35.2, 297.0], [35.3, 297.0], [35.4, 298.0], [35.5, 298.0], [35.6, 298.0], [35.7, 298.0], [35.8, 298.0], [35.9, 299.0], [36.0, 299.0], [36.1, 299.0], [36.2, 299.0], [36.3, 299.0], [36.4, 300.0], [36.5, 300.0], [36.6, 300.0], [36.7, 300.0], [36.8, 300.0], [36.9, 300.0], [37.0, 301.0], [37.1, 301.0], [37.2, 301.0], [37.3, 301.0], [37.4, 301.0], [37.5, 301.0], [37.6, 302.0], [37.7, 302.0], [37.8, 302.0], [37.9, 302.0], [38.0, 302.0], [38.1, 303.0], [38.2, 303.0], [38.3, 303.0], [38.4, 304.0], [38.5, 304.0], [38.6, 304.0], [38.7, 304.0], [38.8, 304.0], [38.9, 305.0], [39.0, 305.0], [39.1, 305.0], [39.2, 305.0], [39.3, 305.0], [39.4, 305.0], [39.5, 305.0], [39.6, 306.0], [39.7, 306.0], [39.8, 306.0], [39.9, 306.0], [40.0, 307.0], [40.1, 307.0], [40.2, 307.0], [40.3, 308.0], [40.4, 308.0], [40.5, 309.0], [40.6, 309.0], [40.7, 310.0], [40.8, 310.0], [40.9, 311.0], [41.0, 311.0], [41.1, 311.0], [41.2, 312.0], [41.3, 312.0], [41.4, 312.0], [41.5, 313.0], [41.6, 313.0], [41.7, 314.0], [41.8, 314.0], [41.9, 314.0], [42.0, 314.0], [42.1, 314.0], [42.2, 315.0], [42.3, 316.0], [42.4, 316.0], [42.5, 316.0], [42.6, 316.0], [42.7, 317.0], [42.8, 317.0], [42.9, 318.0], [43.0, 318.0], [43.1, 319.0], [43.2, 320.0], [43.3, 320.0], [43.4, 321.0], [43.5, 321.0], [43.6, 321.0], [43.7, 322.0], [43.8, 323.0], [43.9, 323.0], [44.0, 324.0], [44.1, 325.0], [44.2, 325.0], [44.3, 325.0], [44.4, 326.0], [44.5, 327.0], [44.6, 327.0], [44.7, 328.0], [44.8, 328.0], [44.9, 328.0], [45.0, 329.0], [45.1, 329.0], [45.2, 330.0], [45.3, 330.0], [45.4, 331.0], [45.5, 332.0], [45.6, 332.0], [45.7, 333.0], [45.8, 334.0], [45.9, 334.0], [46.0, 335.0], [46.1, 335.0], [46.2, 336.0], [46.3, 336.0], [46.4, 337.0], [46.5, 337.0], [46.6, 337.0], [46.7, 338.0], [46.8, 338.0], [46.9, 338.0], [47.0, 340.0], [47.1, 340.0], [47.2, 341.0], [47.3, 341.0], [47.4, 341.0], [47.5, 342.0], [47.6, 342.0], [47.7, 343.0], [47.8, 344.0], [47.9, 344.0], [48.0, 345.0], [48.1, 345.0], [48.2, 346.0], [48.3, 346.0], [48.4, 346.0], [48.5, 346.0], [48.6, 347.0], [48.7, 347.0], [48.8, 347.0], [48.9, 348.0], [49.0, 348.0], [49.1, 349.0], [49.2, 349.0], [49.3, 350.0], [49.4, 350.0], [49.5, 351.0], [49.6, 352.0], [49.7, 352.0], [49.8, 353.0], [49.9, 353.0], [50.0, 354.0], [50.1, 354.0], [50.2, 354.0], [50.3, 355.0], [50.4, 355.0], [50.5, 355.0], [50.6, 356.0], [50.7, 356.0], [50.8, 357.0], [50.9, 357.0], [51.0, 358.0], [51.1, 358.0], [51.2, 359.0], [51.3, 359.0], [51.4, 359.0], [51.5, 360.0], [51.6, 360.0], [51.7, 360.0], [51.8, 360.0], [51.9, 361.0], [52.0, 361.0], [52.1, 361.0], [52.2, 362.0], [52.3, 362.0], [52.4, 362.0], [52.5, 362.0], [52.6, 363.0], [52.7, 363.0], [52.8, 363.0], [52.9, 363.0], [53.0, 363.0], [53.1, 363.0], [53.2, 363.0], [53.3, 364.0], [53.4, 364.0], [53.5, 364.0], [53.6, 364.0], [53.7, 365.0], [53.8, 365.0], [53.9, 365.0], [54.0, 365.0], [54.1, 365.0], [54.2, 366.0], [54.3, 366.0], [54.4, 366.0], [54.5, 366.0], [54.6, 367.0], [54.7, 367.0], [54.8, 367.0], [54.9, 368.0], [55.0, 368.0], [55.1, 368.0], [55.2, 369.0], [55.3, 369.0], [55.4, 369.0], [55.5, 369.0], [55.6, 369.0], [55.7, 370.0], [55.8, 370.0], [55.9, 370.0], [56.0, 371.0], [56.1, 371.0], [56.2, 371.0], [56.3, 372.0], [56.4, 372.0], [56.5, 372.0], [56.6, 373.0], [56.7, 373.0], [56.8, 374.0], [56.9, 374.0], [57.0, 374.0], [57.1, 374.0], [57.2, 375.0], [57.3, 376.0], [57.4, 376.0], [57.5, 377.0], [57.6, 377.0], [57.7, 377.0], [57.8, 378.0], [57.9, 378.0], [58.0, 378.0], [58.1, 379.0], [58.2, 379.0], [58.3, 380.0], [58.4, 380.0], [58.5, 380.0], [58.6, 381.0], [58.7, 381.0], [58.8, 381.0], [58.9, 382.0], [59.0, 382.0], [59.1, 383.0], [59.2, 383.0], [59.3, 383.0], [59.4, 383.0], [59.5, 384.0], [59.6, 384.0], [59.7, 384.0], [59.8, 384.0], [59.9, 385.0], [60.0, 385.0], [60.1, 385.0], [60.2, 385.0], [60.3, 386.0], [60.4, 386.0], [60.5, 387.0], [60.6, 387.0], [60.7, 387.0], [60.8, 388.0], [60.9, 388.0], [61.0, 388.0], [61.1, 389.0], [61.2, 389.0], [61.3, 389.0], [61.4, 390.0], [61.5, 390.0], [61.6, 390.0], [61.7, 391.0], [61.8, 391.0], [61.9, 391.0], [62.0, 391.0], [62.1, 391.0], [62.2, 391.0], [62.3, 392.0], [62.4, 392.0], [62.5, 392.0], [62.6, 393.0], [62.7, 393.0], [62.8, 393.0], [62.9, 394.0], [63.0, 394.0], [63.1, 395.0], [63.2, 395.0], [63.3, 395.0], [63.4, 395.0], [63.5, 396.0], [63.6, 396.0], [63.7, 396.0], [63.8, 397.0], [63.9, 397.0], [64.0, 397.0], [64.1, 397.0], [64.2, 398.0], [64.3, 399.0], [64.4, 399.0], [64.5, 399.0], [64.6, 400.0], [64.7, 400.0], [64.8, 400.0], [64.9, 401.0], [65.0, 401.0], [65.1, 401.0], [65.2, 401.0], [65.3, 402.0], [65.4, 402.0], [65.5, 402.0], [65.6, 403.0], [65.7, 403.0], [65.8, 403.0], [65.9, 403.0], [66.0, 404.0], [66.1, 404.0], [66.2, 404.0], [66.3, 405.0], [66.4, 405.0], [66.5, 405.0], [66.6, 406.0], [66.7, 406.0], [66.8, 406.0], [66.9, 407.0], [67.0, 407.0], [67.1, 407.0], [67.2, 407.0], [67.3, 408.0], [67.4, 408.0], [67.5, 408.0], [67.6, 409.0], [67.7, 409.0], [67.8, 410.0], [67.9, 410.0], [68.0, 410.0], [68.1, 411.0], [68.2, 411.0], [68.3, 411.0], [68.4, 411.0], [68.5, 412.0], [68.6, 412.0], [68.7, 412.0], [68.8, 412.0], [68.9, 413.0], [69.0, 413.0], [69.1, 413.0], [69.2, 413.0], [69.3, 413.0], [69.4, 413.0], [69.5, 414.0], [69.6, 414.0], [69.7, 414.0], [69.8, 414.0], [69.9, 415.0], [70.0, 415.0], [70.1, 415.0], [70.2, 415.0], [70.3, 415.0], [70.4, 416.0], [70.5, 416.0], [70.6, 416.0], [70.7, 417.0], [70.8, 417.0], [70.9, 417.0], [71.0, 418.0], [71.1, 418.0], [71.2, 418.0], [71.3, 418.0], [71.4, 418.0], [71.5, 418.0], [71.6, 419.0], [71.7, 419.0], [71.8, 419.0], [71.9, 419.0], [72.0, 420.0], [72.1, 420.0], [72.2, 420.0], [72.3, 420.0], [72.4, 421.0], [72.5, 421.0], [72.6, 421.0], [72.7, 421.0], [72.8, 421.0], [72.9, 422.0], [73.0, 422.0], [73.1, 422.0], [73.2, 423.0], [73.3, 423.0], [73.4, 424.0], [73.5, 424.0], [73.6, 424.0], [73.7, 425.0], [73.8, 426.0], [73.9, 426.0], [74.0, 426.0], [74.1, 426.0], [74.2, 427.0], [74.3, 427.0], [74.4, 428.0], [74.5, 428.0], [74.6, 428.0], [74.7, 429.0], [74.8, 429.0], [74.9, 430.0], [75.0, 430.0], [75.1, 430.0], [75.2, 431.0], [75.3, 431.0], [75.4, 432.0], [75.5, 432.0], [75.6, 432.0], [75.7, 432.0], [75.8, 433.0], [75.9, 433.0], [76.0, 433.0], [76.1, 434.0], [76.2, 434.0], [76.3, 435.0], [76.4, 435.0], [76.5, 435.0], [76.6, 435.0], [76.7, 436.0], [76.8, 436.0], [76.9, 436.0], [77.0, 436.0], [77.1, 437.0], [77.2, 437.0], [77.3, 438.0], [77.4, 438.0], [77.5, 438.0], [77.6, 439.0], [77.7, 439.0], [77.8, 439.0], [77.9, 439.0], [78.0, 440.0], [78.1, 440.0], [78.2, 440.0], [78.3, 440.0], [78.4, 441.0], [78.5, 441.0], [78.6, 442.0], [78.7, 442.0], [78.8, 442.0], [78.9, 442.0], [79.0, 443.0], [79.1, 444.0], [79.2, 445.0], [79.3, 445.0], [79.4, 445.0], [79.5, 445.0], [79.6, 446.0], [79.7, 446.0], [79.8, 446.0], [79.9, 447.0], [80.0, 447.0], [80.1, 447.0], [80.2, 448.0], [80.3, 448.0], [80.4, 448.0], [80.5, 448.0], [80.6, 448.0], [80.7, 449.0], [80.8, 449.0], [80.9, 449.0], [81.0, 449.0], [81.1, 450.0], [81.2, 450.0], [81.3, 450.0], [81.4, 450.0], [81.5, 450.0], [81.6, 451.0], [81.7, 451.0], [81.8, 451.0], [81.9, 451.0], [82.0, 452.0], [82.1, 452.0], [82.2, 452.0], [82.3, 452.0], [82.4, 453.0], [82.5, 453.0], [82.6, 453.0], [82.7, 453.0], [82.8, 454.0], [82.9, 454.0], [83.0, 454.0], [83.1, 455.0], [83.2, 455.0], [83.3, 455.0], [83.4, 456.0], [83.5, 456.0], [83.6, 456.0], [83.7, 456.0], [83.8, 457.0], [83.9, 457.0], [84.0, 457.0], [84.1, 457.0], [84.2, 457.0], [84.3, 458.0], [84.4, 458.0], [84.5, 458.0], [84.6, 458.0], [84.7, 459.0], [84.8, 459.0], [84.9, 459.0], [85.0, 459.0], [85.1, 460.0], [85.2, 460.0], [85.3, 460.0], [85.4, 460.0], [85.5, 461.0], [85.6, 461.0], [85.7, 462.0], [85.8, 463.0], [85.9, 463.0], [86.0, 463.0], [86.1, 464.0], [86.2, 464.0], [86.3, 465.0], [86.4, 466.0], [86.5, 467.0], [86.6, 467.0], [86.7, 468.0], [86.8, 468.0], [86.9, 469.0], [87.0, 469.0], [87.1, 470.0], [87.2, 471.0], [87.3, 472.0], [87.4, 472.0], [87.5, 472.0], [87.6, 473.0], [87.7, 474.0], [87.8, 474.0], [87.9, 474.0], [88.0, 474.0], [88.1, 475.0], [88.2, 475.0], [88.3, 475.0], [88.4, 476.0], [88.5, 476.0], [88.6, 476.0], [88.7, 477.0], [88.8, 477.0], [88.9, 477.0], [89.0, 478.0], [89.1, 478.0], [89.2, 478.0], [89.3, 478.0], [89.4, 479.0], [89.5, 480.0], [89.6, 481.0], [89.7, 481.0], [89.8, 481.0], [89.9, 481.0], [90.0, 482.0], [90.1, 482.0], [90.2, 482.0], [90.3, 483.0], [90.4, 483.0], [90.5, 484.0], [90.6, 484.0], [90.7, 485.0], [90.8, 485.0], [90.9, 486.0], [91.0, 487.0], [91.1, 489.0], [91.2, 490.0], [91.3, 491.0], [91.4, 492.0], [91.5, 494.0], [91.6, 496.0], [91.7, 497.0], [91.8, 499.0], [91.9, 501.0], [92.0, 506.0], [92.1, 509.0], [92.2, 512.0], [92.3, 514.0], [92.4, 515.0], [92.5, 517.0], [92.6, 518.0], [92.7, 521.0], [92.8, 528.0], [92.9, 532.0], [93.0, 541.0], [93.1, 545.0], [93.2, 547.0], [93.3, 548.0], [93.4, 551.0], [93.5, 552.0], [93.6, 552.0], [93.7, 553.0], [93.8, 553.0], [93.9, 553.0], [94.0, 554.0], [94.1, 555.0], [94.2, 556.0], [94.3, 557.0], [94.4, 558.0], [94.5, 559.0], [94.6, 561.0], [94.7, 572.0], [94.8, 573.0], [94.9, 575.0], [95.0, 577.0], [95.1, 581.0], [95.2, 594.0], [95.3, 602.0], [95.4, 612.0], [95.5, 618.0], [95.6, 632.0], [95.7, 635.0], [95.8, 636.0], [95.9, 639.0], [96.0, 641.0], [96.1, 643.0], [96.2, 646.0], [96.3, 648.0], [96.4, 649.0], [96.5, 651.0], [96.6, 652.0], [96.7, 653.0], [96.8, 655.0], [96.9, 656.0], [97.0, 657.0], [97.1, 658.0], [97.2, 658.0], [97.3, 660.0], [97.4, 662.0], [97.5, 663.0], [97.6, 664.0], [97.7, 664.0], [97.8, 665.0], [97.9, 666.0], [98.0, 666.0], [98.1, 666.0], [98.2, 667.0], [98.3, 667.0], [98.4, 667.0], [98.5, 667.0], [98.6, 668.0], [98.7, 669.0], [98.8, 669.0], [98.9, 669.0], [99.0, 671.0], [99.1, 671.0], [99.2, 672.0], [99.3, 673.0], [99.4, 674.0], [99.5, 675.0], [99.6, 675.0], [99.7, 676.0], [99.8, 677.0], [99.9, 682.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1713.0, "series": [{"data": [[0.0, 231.0], [300.0, 1524.0], [600.0, 254.0], [700.0, 2.0], [100.0, 25.0], [200.0, 1713.0], [400.0, 1476.0], [500.0, 187.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5402.0, "series": [{"data": [[0.0, 10.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5402.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 193.36382113821193, "minX": 1.75689204E12, "maxY": 193.36382113821193, "series": [{"data": [[1.75689204E12, 193.36382113821193]], "isOverall": false, "label": "Seckill Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75689204E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 114.5, "minX": 1.0, "maxY": 560.0, "series": [{"data": [[2.0, 287.0], [3.0, 288.0], [4.0, 289.0], [5.0, 300.0], [7.0, 300.5], [8.0, 301.0], [9.0, 302.0], [10.0, 303.0], [11.0, 303.0], [12.0, 302.0], [13.0, 302.0], [15.0, 311.5], [16.0, 315.0], [17.0, 316.0], [19.0, 315.0], [20.0, 317.0], [21.0, 305.0], [22.0, 303.0], [23.0, 321.0], [24.0, 321.0], [25.0, 321.0], [26.0, 322.0], [27.0, 322.0], [28.0, 323.0], [29.0, 325.0], [33.0, 317.0], [32.0, 325.3333333333333], [35.0, 448.0], [34.0, 316.0], [37.0, 450.0], [36.0, 448.0], [39.0, 450.0], [38.0, 449.0], [41.0, 452.0], [40.0, 453.0], [42.0, 454.0], [45.0, 443.0], [44.0, 456.5], [47.0, 450.0], [46.0, 449.0], [49.0, 450.0], [48.0, 451.0], [50.0, 449.0], [53.0, 454.0], [52.0, 453.5], [54.0, 454.0], [57.0, 452.0], [56.0, 456.5], [58.0, 281.3333333333333], [59.0, 453.0], [60.0, 311.5], [61.0, 453.0], [63.0, 457.0], [62.0, 456.0], [67.0, 272.1818181818182], [65.0, 457.0], [64.0, 456.0], [68.0, 262.7142857142857], [70.0, 448.0], [69.0, 447.0], [73.0, 332.2], [74.0, 217.0], [75.0, 314.3333333333333], [72.0, 451.0], [76.0, 369.0], [77.0, 296.4], [78.0, 283.0], [79.0, 458.0], [80.0, 114.5], [81.0, 384.0], [83.0, 450.5], [87.0, 454.5], [85.0, 451.0], [89.0, 286.5], [90.0, 269.57142857142856], [88.0, 455.0], [92.0, 264.0], [93.0, 299.2], [95.0, 451.0], [94.0, 452.0], [96.0, 224.0], [99.0, 461.0], [98.0, 457.0], [97.0, 453.0], [102.0, 262.75], [103.0, 468.0], [100.0, 463.0], [104.0, 259.5], [107.0, 482.0], [106.0, 465.0], [105.0, 475.5], [110.0, 481.0], [109.0, 482.0], [108.0, 481.0], [113.0, 199.16666666666666], [114.0, 270.3333333333333], [115.0, 278.25], [112.0, 485.0], [118.0, 275.1428571428571], [119.0, 353.5], [117.0, 489.0], [120.0, 322.25], [121.0, 312.3333333333333], [123.0, 474.0], [122.0, 475.0], [124.0, 249.21428571428572], [127.0, 477.0], [126.0, 478.0], [125.0, 474.0], [132.0, 311.75], [133.0, 327.0], [134.0, 183.8], [135.0, 330.6], [131.0, 472.0], [130.0, 472.0], [129.0, 477.0], [128.0, 478.0], [141.0, 267.0], [142.0, 351.0], [143.0, 416.5], [140.0, 478.0], [139.0, 477.5], [137.0, 478.0], [136.0, 477.0], [144.0, 415.5], [145.0, 367.5], [146.0, 368.5], [147.0, 266.625], [148.0, 278.5], [151.0, 325.1428571428571], [149.0, 478.0], [154.0, 259.4], [155.0, 481.0], [156.0, 324.3333333333333], [157.0, 356.0], [158.0, 273.0], [159.0, 284.0], [153.0, 479.5], [152.0, 478.0], [161.0, 188.0], [162.0, 385.3333333333333], [163.0, 331.3333333333333], [164.0, 301.25], [165.0, 363.0], [167.0, 245.83333333333334], [166.0, 444.0], [160.0, 436.0], [168.0, 397.5], [169.0, 247.33333333333331], [170.0, 285.5], [171.0, 279.0], [172.0, 331.00000000000006], [173.0, 275.5], [175.0, 556.0], [174.0, 478.5], [176.0, 318.25], [177.0, 441.4], [178.0, 277.5], [180.0, 374.5], [182.0, 420.5], [183.0, 344.6], [181.0, 552.0], [184.0, 327.0], [185.0, 421.0], [188.0, 357.99999999999994], [189.0, 248.0], [191.0, 556.25], [187.0, 553.0], [186.0, 551.0], [192.0, 332.1111111111111], [194.0, 456.6], [197.0, 418.09090909090907], [199.0, 303.6666666666667], [198.0, 554.5], [195.0, 560.0], [193.0, 548.0], [200.0, 357.63608748481283], [1.0, 287.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}, {"data": [[193.36382113821193, 356.2483370288253]], "isOverall": false, "label": "POST Seckill Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 32127.066666666666, "minX": 1.75689204E12, "maxY": 40175.066666666666, "series": [{"data": [[1.75689204E12, 32127.066666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75689204E12, 40175.066666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75689204E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 356.2483370288253, "minX": 1.75689204E12, "maxY": 356.2483370288253, "series": [{"data": [[1.75689204E12, 356.2483370288253]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75689204E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 356.1657427937923, "minX": 1.75689204E12, "maxY": 356.1657427937923, "series": [{"data": [[1.75689204E12, 356.1657427937923]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75689204E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.56171470805617, "minX": 1.75689204E12, "maxY": 0.56171470805617, "series": [{"data": [[1.75689204E12, 0.56171470805617]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75689204E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 170.0, "minX": 1.75689204E12, "maxY": 393.0, "series": [{"data": [[1.75689204E12, 393.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75689204E12, 170.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75689204E12, 388.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75689204E12, 393.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75689204E12, 255.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75689204E12, 393.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75689204E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 222.5, "minX": 46.0, "maxY": 514.0, "series": [{"data": [[46.0, 255.0], [414.0, 393.0], [458.0, 222.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[594.0, 366.5], [641.0, 288.0], [677.0, 278.0], [46.0, 225.0], [742.0, 287.0], [386.0, 449.0], [414.0, 373.0], [458.0, 314.0], [468.0, 514.0], [477.0, 447.0], [509.0, 396.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 742.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 222.5, "minX": 46.0, "maxY": 514.0, "series": [{"data": [[46.0, 255.0], [414.0, 393.0], [458.0, 222.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[594.0, 366.5], [641.0, 288.0], [677.0, 278.0], [46.0, 224.0], [742.0, 287.0], [386.0, 449.0], [414.0, 373.0], [458.0, 314.0], [468.0, 514.0], [477.0, 446.0], [509.0, 396.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 742.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 90.2, "minX": 1.75689204E12, "maxY": 90.2, "series": [{"data": [[1.75689204E12, 90.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75689204E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75689204E12, "maxY": 90.03333333333333, "series": [{"data": [[1.75689204E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75689204E12, 90.03333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75689204E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75689204E12, "maxY": 90.03333333333333, "series": [{"data": [[1.75689204E12, 90.03333333333333]], "isOverall": false, "label": "POST Seckill Request-failure", "isController": false}, {"data": [[1.75689204E12, 0.16666666666666666]], "isOverall": false, "label": "POST Seckill Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75689204E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75689204E12, "maxY": 90.03333333333333, "series": [{"data": [[1.75689204E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75689204E12, 90.03333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75689204E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

