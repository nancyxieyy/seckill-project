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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1760.0, "series": [{"data": [[0.0, 4.0], [0.1, 13.0], [0.2, 16.0], [0.3, 16.0], [0.4, 17.0], [0.5, 17.0], [0.6, 18.0], [0.7, 18.0], [0.8, 18.0], [0.9, 18.0], [1.0, 19.0], [1.1, 19.0], [1.2, 19.0], [1.3, 19.0], [1.4, 19.0], [1.5, 20.0], [1.6, 20.0], [1.7, 20.0], [1.8, 20.0], [1.9, 21.0], [2.0, 21.0], [2.1, 21.0], [2.2, 22.0], [2.3, 22.0], [2.4, 22.0], [2.5, 22.0], [2.6, 23.0], [2.7, 23.0], [2.8, 23.0], [2.9, 24.0], [3.0, 24.0], [3.1, 24.0], [3.2, 24.0], [3.3, 25.0], [3.4, 25.0], [3.5, 26.0], [3.6, 26.0], [3.7, 26.0], [3.8, 27.0], [3.9, 27.0], [4.0, 27.0], [4.1, 28.0], [4.2, 29.0], [4.3, 29.0], [4.4, 30.0], [4.5, 30.0], [4.6, 30.0], [4.7, 31.0], [4.8, 31.0], [4.9, 31.0], [5.0, 31.0], [5.1, 32.0], [5.2, 32.0], [5.3, 32.0], [5.4, 33.0], [5.5, 33.0], [5.6, 33.0], [5.7, 34.0], [5.8, 34.0], [5.9, 35.0], [6.0, 35.0], [6.1, 35.0], [6.2, 35.0], [6.3, 36.0], [6.4, 37.0], [6.5, 38.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 41.0], [7.1, 41.0], [7.2, 42.0], [7.3, 43.0], [7.4, 43.0], [7.5, 44.0], [7.6, 46.0], [7.7, 47.0], [7.8, 48.0], [7.9, 49.0], [8.0, 51.0], [8.1, 53.0], [8.2, 55.0], [8.3, 57.0], [8.4, 58.0], [8.5, 60.0], [8.6, 66.0], [8.7, 70.0], [8.8, 72.0], [8.9, 165.0], [9.0, 206.0], [9.1, 208.0], [9.2, 211.0], [9.3, 215.0], [9.4, 217.0], [9.5, 220.0], [9.6, 223.0], [9.7, 224.0], [9.8, 225.0], [9.9, 228.0], [10.0, 229.0], [10.1, 232.0], [10.2, 234.0], [10.3, 236.0], [10.4, 239.0], [10.5, 243.0], [10.6, 245.0], [10.7, 248.0], [10.8, 251.0], [10.9, 259.0], [11.0, 261.0], [11.1, 266.0], [11.2, 269.0], [11.3, 271.0], [11.4, 274.0], [11.5, 276.0], [11.6, 284.0], [11.7, 286.0], [11.8, 290.0], [11.9, 291.0], [12.0, 293.0], [12.1, 301.0], [12.2, 304.0], [12.3, 305.0], [12.4, 307.0], [12.5, 311.0], [12.6, 313.0], [12.7, 313.0], [12.8, 314.0], [12.9, 316.0], [13.0, 316.0], [13.1, 317.0], [13.2, 317.0], [13.3, 318.0], [13.4, 319.0], [13.5, 319.0], [13.6, 319.0], [13.7, 320.0], [13.8, 321.0], [13.9, 321.0], [14.0, 322.0], [14.1, 322.0], [14.2, 322.0], [14.3, 322.0], [14.4, 323.0], [14.5, 323.0], [14.6, 323.0], [14.7, 323.0], [14.8, 324.0], [14.9, 324.0], [15.0, 324.0], [15.1, 325.0], [15.2, 325.0], [15.3, 325.0], [15.4, 326.0], [15.5, 326.0], [15.6, 326.0], [15.7, 326.0], [15.8, 326.0], [15.9, 327.0], [16.0, 327.0], [16.1, 328.0], [16.2, 328.0], [16.3, 328.0], [16.4, 329.0], [16.5, 329.0], [16.6, 329.0], [16.7, 330.0], [16.8, 330.0], [16.9, 330.0], [17.0, 330.0], [17.1, 331.0], [17.2, 331.0], [17.3, 331.0], [17.4, 332.0], [17.5, 332.0], [17.6, 332.0], [17.7, 333.0], [17.8, 333.0], [17.9, 333.0], [18.0, 333.0], [18.1, 334.0], [18.2, 334.0], [18.3, 334.0], [18.4, 334.0], [18.5, 335.0], [18.6, 335.0], [18.7, 336.0], [18.8, 336.0], [18.9, 336.0], [19.0, 336.0], [19.1, 337.0], [19.2, 337.0], [19.3, 337.0], [19.4, 337.0], [19.5, 338.0], [19.6, 338.0], [19.7, 338.0], [19.8, 339.0], [19.9, 339.0], [20.0, 340.0], [20.1, 340.0], [20.2, 340.0], [20.3, 340.0], [20.4, 340.0], [20.5, 341.0], [20.6, 341.0], [20.7, 341.0], [20.8, 342.0], [20.9, 342.0], [21.0, 342.0], [21.1, 342.0], [21.2, 343.0], [21.3, 343.0], [21.4, 343.0], [21.5, 344.0], [21.6, 344.0], [21.7, 344.0], [21.8, 345.0], [21.9, 345.0], [22.0, 345.0], [22.1, 345.0], [22.2, 346.0], [22.3, 346.0], [22.4, 346.0], [22.5, 347.0], [22.6, 347.0], [22.7, 347.0], [22.8, 347.0], [22.9, 347.0], [23.0, 348.0], [23.1, 348.0], [23.2, 348.0], [23.3, 348.0], [23.4, 349.0], [23.5, 349.0], [23.6, 349.0], [23.7, 349.0], [23.8, 350.0], [23.9, 350.0], [24.0, 350.0], [24.1, 350.0], [24.2, 351.0], [24.3, 351.0], [24.4, 351.0], [24.5, 352.0], [24.6, 352.0], [24.7, 352.0], [24.8, 352.0], [24.9, 352.0], [25.0, 352.0], [25.1, 353.0], [25.2, 353.0], [25.3, 353.0], [25.4, 353.0], [25.5, 354.0], [25.6, 354.0], [25.7, 354.0], [25.8, 355.0], [25.9, 355.0], [26.0, 355.0], [26.1, 355.0], [26.2, 355.0], [26.3, 356.0], [26.4, 356.0], [26.5, 357.0], [26.6, 357.0], [26.7, 357.0], [26.8, 357.0], [26.9, 358.0], [27.0, 358.0], [27.1, 358.0], [27.2, 359.0], [27.3, 359.0], [27.4, 359.0], [27.5, 360.0], [27.6, 360.0], [27.7, 360.0], [27.8, 360.0], [27.9, 360.0], [28.0, 361.0], [28.1, 361.0], [28.2, 361.0], [28.3, 361.0], [28.4, 361.0], [28.5, 362.0], [28.6, 362.0], [28.7, 362.0], [28.8, 362.0], [28.9, 362.0], [29.0, 363.0], [29.1, 363.0], [29.2, 363.0], [29.3, 363.0], [29.4, 364.0], [29.5, 364.0], [29.6, 364.0], [29.7, 364.0], [29.8, 365.0], [29.9, 365.0], [30.0, 365.0], [30.1, 365.0], [30.2, 365.0], [30.3, 366.0], [30.4, 366.0], [30.5, 366.0], [30.6, 367.0], [30.7, 367.0], [30.8, 367.0], [30.9, 367.0], [31.0, 368.0], [31.1, 368.0], [31.2, 368.0], [31.3, 368.0], [31.4, 368.0], [31.5, 368.0], [31.6, 369.0], [31.7, 369.0], [31.8, 369.0], [31.9, 369.0], [32.0, 369.0], [32.1, 370.0], [32.2, 370.0], [32.3, 370.0], [32.4, 370.0], [32.5, 370.0], [32.6, 370.0], [32.7, 370.0], [32.8, 371.0], [32.9, 371.0], [33.0, 371.0], [33.1, 371.0], [33.2, 371.0], [33.3, 371.0], [33.4, 371.0], [33.5, 371.0], [33.6, 372.0], [33.7, 372.0], [33.8, 372.0], [33.9, 372.0], [34.0, 372.0], [34.1, 373.0], [34.2, 373.0], [34.3, 373.0], [34.4, 373.0], [34.5, 373.0], [34.6, 373.0], [34.7, 373.0], [34.8, 374.0], [34.9, 374.0], [35.0, 374.0], [35.1, 374.0], [35.2, 374.0], [35.3, 374.0], [35.4, 374.0], [35.5, 374.0], [35.6, 375.0], [35.7, 375.0], [35.8, 375.0], [35.9, 375.0], [36.0, 375.0], [36.1, 375.0], [36.2, 375.0], [36.3, 376.0], [36.4, 376.0], [36.5, 376.0], [36.6, 376.0], [36.7, 376.0], [36.8, 376.0], [36.9, 376.0], [37.0, 377.0], [37.1, 377.0], [37.2, 377.0], [37.3, 377.0], [37.4, 377.0], [37.5, 377.0], [37.6, 378.0], [37.7, 378.0], [37.8, 378.0], [37.9, 378.0], [38.0, 378.0], [38.1, 378.0], [38.2, 378.0], [38.3, 378.0], [38.4, 378.0], [38.5, 379.0], [38.6, 379.0], [38.7, 379.0], [38.8, 379.0], [38.9, 379.0], [39.0, 379.0], [39.1, 379.0], [39.2, 380.0], [39.3, 380.0], [39.4, 380.0], [39.5, 380.0], [39.6, 380.0], [39.7, 380.0], [39.8, 381.0], [39.9, 381.0], [40.0, 381.0], [40.1, 381.0], [40.2, 381.0], [40.3, 381.0], [40.4, 381.0], [40.5, 382.0], [40.6, 382.0], [40.7, 382.0], [40.8, 382.0], [40.9, 382.0], [41.0, 382.0], [41.1, 382.0], [41.2, 383.0], [41.3, 383.0], [41.4, 383.0], [41.5, 383.0], [41.6, 383.0], [41.7, 383.0], [41.8, 383.0], [41.9, 383.0], [42.0, 384.0], [42.1, 384.0], [42.2, 384.0], [42.3, 384.0], [42.4, 384.0], [42.5, 384.0], [42.6, 384.0], [42.7, 384.0], [42.8, 385.0], [42.9, 385.0], [43.0, 385.0], [43.1, 385.0], [43.2, 385.0], [43.3, 385.0], [43.4, 385.0], [43.5, 385.0], [43.6, 385.0], [43.7, 386.0], [43.8, 386.0], [43.9, 386.0], [44.0, 386.0], [44.1, 386.0], [44.2, 386.0], [44.3, 386.0], [44.4, 386.0], [44.5, 387.0], [44.6, 387.0], [44.7, 387.0], [44.8, 387.0], [44.9, 387.0], [45.0, 387.0], [45.1, 387.0], [45.2, 387.0], [45.3, 387.0], [45.4, 388.0], [45.5, 388.0], [45.6, 388.0], [45.7, 388.0], [45.8, 388.0], [45.9, 388.0], [46.0, 389.0], [46.1, 389.0], [46.2, 389.0], [46.3, 389.0], [46.4, 390.0], [46.5, 390.0], [46.6, 390.0], [46.7, 390.0], [46.8, 390.0], [46.9, 391.0], [47.0, 391.0], [47.1, 391.0], [47.2, 391.0], [47.3, 391.0], [47.4, 391.0], [47.5, 391.0], [47.6, 391.0], [47.7, 392.0], [47.8, 392.0], [47.9, 392.0], [48.0, 392.0], [48.1, 392.0], [48.2, 392.0], [48.3, 392.0], [48.4, 392.0], [48.5, 392.0], [48.6, 393.0], [48.7, 393.0], [48.8, 393.0], [48.9, 393.0], [49.0, 393.0], [49.1, 393.0], [49.2, 394.0], [49.3, 394.0], [49.4, 394.0], [49.5, 394.0], [49.6, 394.0], [49.7, 394.0], [49.8, 394.0], [49.9, 395.0], [50.0, 395.0], [50.1, 395.0], [50.2, 395.0], [50.3, 395.0], [50.4, 395.0], [50.5, 395.0], [50.6, 395.0], [50.7, 395.0], [50.8, 396.0], [50.9, 396.0], [51.0, 396.0], [51.1, 396.0], [51.2, 396.0], [51.3, 396.0], [51.4, 396.0], [51.5, 397.0], [51.6, 397.0], [51.7, 397.0], [51.8, 397.0], [51.9, 397.0], [52.0, 397.0], [52.1, 397.0], [52.2, 398.0], [52.3, 398.0], [52.4, 398.0], [52.5, 398.0], [52.6, 398.0], [52.7, 398.0], [52.8, 398.0], [52.9, 399.0], [53.0, 399.0], [53.1, 399.0], [53.2, 399.0], [53.3, 399.0], [53.4, 399.0], [53.5, 399.0], [53.6, 399.0], [53.7, 399.0], [53.8, 400.0], [53.9, 400.0], [54.0, 400.0], [54.1, 400.0], [54.2, 400.0], [54.3, 400.0], [54.4, 401.0], [54.5, 401.0], [54.6, 401.0], [54.7, 401.0], [54.8, 401.0], [54.9, 401.0], [55.0, 401.0], [55.1, 401.0], [55.2, 402.0], [55.3, 402.0], [55.4, 402.0], [55.5, 402.0], [55.6, 402.0], [55.7, 402.0], [55.8, 402.0], [55.9, 402.0], [56.0, 402.0], [56.1, 403.0], [56.2, 403.0], [56.3, 403.0], [56.4, 403.0], [56.5, 403.0], [56.6, 403.0], [56.7, 404.0], [56.8, 404.0], [56.9, 404.0], [57.0, 404.0], [57.1, 404.0], [57.2, 404.0], [57.3, 405.0], [57.4, 405.0], [57.5, 405.0], [57.6, 405.0], [57.7, 405.0], [57.8, 405.0], [57.9, 405.0], [58.0, 405.0], [58.1, 406.0], [58.2, 406.0], [58.3, 406.0], [58.4, 406.0], [58.5, 406.0], [58.6, 406.0], [58.7, 406.0], [58.8, 406.0], [58.9, 406.0], [59.0, 406.0], [59.1, 406.0], [59.2, 406.0], [59.3, 407.0], [59.4, 407.0], [59.5, 407.0], [59.6, 407.0], [59.7, 407.0], [59.8, 407.0], [59.9, 407.0], [60.0, 407.0], [60.1, 407.0], [60.2, 407.0], [60.3, 407.0], [60.4, 408.0], [60.5, 408.0], [60.6, 408.0], [60.7, 408.0], [60.8, 408.0], [60.9, 408.0], [61.0, 408.0], [61.1, 408.0], [61.2, 409.0], [61.3, 409.0], [61.4, 409.0], [61.5, 409.0], [61.6, 409.0], [61.7, 409.0], [61.8, 409.0], [61.9, 409.0], [62.0, 409.0], [62.1, 409.0], [62.2, 409.0], [62.3, 410.0], [62.4, 410.0], [62.5, 410.0], [62.6, 410.0], [62.7, 410.0], [62.8, 410.0], [62.9, 410.0], [63.0, 411.0], [63.1, 411.0], [63.2, 411.0], [63.3, 411.0], [63.4, 411.0], [63.5, 411.0], [63.6, 412.0], [63.7, 412.0], [63.8, 412.0], [63.9, 412.0], [64.0, 412.0], [64.1, 412.0], [64.2, 412.0], [64.3, 412.0], [64.4, 412.0], [64.5, 413.0], [64.6, 413.0], [64.7, 413.0], [64.8, 413.0], [64.9, 413.0], [65.0, 413.0], [65.1, 414.0], [65.2, 414.0], [65.3, 414.0], [65.4, 414.0], [65.5, 414.0], [65.6, 414.0], [65.7, 415.0], [65.8, 415.0], [65.9, 415.0], [66.0, 415.0], [66.1, 415.0], [66.2, 415.0], [66.3, 415.0], [66.4, 416.0], [66.5, 416.0], [66.6, 416.0], [66.7, 416.0], [66.8, 416.0], [66.9, 416.0], [67.0, 416.0], [67.1, 416.0], [67.2, 417.0], [67.3, 417.0], [67.4, 417.0], [67.5, 417.0], [67.6, 417.0], [67.7, 417.0], [67.8, 418.0], [67.9, 418.0], [68.0, 418.0], [68.1, 418.0], [68.2, 418.0], [68.3, 418.0], [68.4, 419.0], [68.5, 419.0], [68.6, 419.0], [68.7, 419.0], [68.8, 419.0], [68.9, 420.0], [69.0, 420.0], [69.1, 420.0], [69.2, 420.0], [69.3, 420.0], [69.4, 420.0], [69.5, 421.0], [69.6, 421.0], [69.7, 421.0], [69.8, 421.0], [69.9, 421.0], [70.0, 421.0], [70.1, 422.0], [70.2, 422.0], [70.3, 422.0], [70.4, 422.0], [70.5, 422.0], [70.6, 422.0], [70.7, 422.0], [70.8, 422.0], [70.9, 423.0], [71.0, 423.0], [71.1, 423.0], [71.2, 423.0], [71.3, 423.0], [71.4, 423.0], [71.5, 423.0], [71.6, 424.0], [71.7, 424.0], [71.8, 424.0], [71.9, 424.0], [72.0, 424.0], [72.1, 424.0], [72.2, 424.0], [72.3, 425.0], [72.4, 425.0], [72.5, 425.0], [72.6, 425.0], [72.7, 425.0], [72.8, 425.0], [72.9, 425.0], [73.0, 426.0], [73.1, 426.0], [73.2, 426.0], [73.3, 426.0], [73.4, 427.0], [73.5, 427.0], [73.6, 427.0], [73.7, 427.0], [73.8, 427.0], [73.9, 428.0], [74.0, 428.0], [74.1, 428.0], [74.2, 428.0], [74.3, 428.0], [74.4, 428.0], [74.5, 429.0], [74.6, 429.0], [74.7, 429.0], [74.8, 429.0], [74.9, 429.0], [75.0, 430.0], [75.1, 430.0], [75.2, 430.0], [75.3, 431.0], [75.4, 431.0], [75.5, 431.0], [75.6, 431.0], [75.7, 431.0], [75.8, 431.0], [75.9, 431.0], [76.0, 432.0], [76.1, 432.0], [76.2, 432.0], [76.3, 432.0], [76.4, 432.0], [76.5, 433.0], [76.6, 433.0], [76.7, 433.0], [76.8, 433.0], [76.9, 434.0], [77.0, 434.0], [77.1, 434.0], [77.2, 434.0], [77.3, 435.0], [77.4, 435.0], [77.5, 435.0], [77.6, 435.0], [77.7, 436.0], [77.8, 436.0], [77.9, 436.0], [78.0, 437.0], [78.1, 437.0], [78.2, 437.0], [78.3, 437.0], [78.4, 437.0], [78.5, 438.0], [78.6, 438.0], [78.7, 438.0], [78.8, 438.0], [78.9, 439.0], [79.0, 439.0], [79.1, 439.0], [79.2, 440.0], [79.3, 440.0], [79.4, 440.0], [79.5, 440.0], [79.6, 441.0], [79.7, 442.0], [79.8, 442.0], [79.9, 442.0], [80.0, 443.0], [80.1, 443.0], [80.2, 444.0], [80.3, 444.0], [80.4, 444.0], [80.5, 445.0], [80.6, 445.0], [80.7, 445.0], [80.8, 446.0], [80.9, 447.0], [81.0, 447.0], [81.1, 447.0], [81.2, 448.0], [81.3, 449.0], [81.4, 450.0], [81.5, 452.0], [81.6, 453.0], [81.7, 454.0], [81.8, 455.0], [81.9, 457.0], [82.0, 459.0], [82.1, 461.0], [82.2, 464.0], [82.3, 466.0], [82.4, 467.0], [82.5, 467.0], [82.6, 469.0], [82.7, 470.0], [82.8, 472.0], [82.9, 472.0], [83.0, 474.0], [83.1, 475.0], [83.2, 476.0], [83.3, 476.0], [83.4, 476.0], [83.5, 477.0], [83.6, 477.0], [83.7, 478.0], [83.8, 479.0], [83.9, 480.0], [84.0, 481.0], [84.1, 481.0], [84.2, 482.0], [84.3, 484.0], [84.4, 485.0], [84.5, 486.0], [84.6, 487.0], [84.7, 488.0], [84.8, 489.0], [84.9, 490.0], [85.0, 491.0], [85.1, 491.0], [85.2, 492.0], [85.3, 492.0], [85.4, 493.0], [85.5, 494.0], [85.6, 495.0], [85.7, 496.0], [85.8, 496.0], [85.9, 498.0], [86.0, 499.0], [86.1, 499.0], [86.2, 500.0], [86.3, 501.0], [86.4, 501.0], [86.5, 503.0], [86.6, 503.0], [86.7, 504.0], [86.8, 506.0], [86.9, 507.0], [87.0, 507.0], [87.1, 509.0], [87.2, 510.0], [87.3, 511.0], [87.4, 512.0], [87.5, 513.0], [87.6, 514.0], [87.7, 514.0], [87.8, 515.0], [87.9, 516.0], [88.0, 517.0], [88.1, 518.0], [88.2, 519.0], [88.3, 519.0], [88.4, 520.0], [88.5, 522.0], [88.6, 523.0], [88.7, 524.0], [88.8, 526.0], [88.9, 527.0], [89.0, 528.0], [89.1, 528.0], [89.2, 529.0], [89.3, 530.0], [89.4, 530.0], [89.5, 531.0], [89.6, 533.0], [89.7, 535.0], [89.8, 537.0], [89.9, 537.0], [90.0, 539.0], [90.1, 540.0], [90.2, 541.0], [90.3, 542.0], [90.4, 543.0], [90.5, 549.0], [90.6, 551.0], [90.7, 552.0], [90.8, 553.0], [90.9, 554.0], [91.0, 555.0], [91.1, 557.0], [91.2, 559.0], [91.3, 560.0], [91.4, 561.0], [91.5, 565.0], [91.6, 566.0], [91.7, 568.0], [91.8, 576.0], [91.9, 582.0], [92.0, 585.0], [92.1, 610.0], [92.2, 651.0], [92.3, 671.0], [92.4, 674.0], [92.5, 676.0], [92.6, 679.0], [92.7, 680.0], [92.8, 682.0], [92.9, 686.0], [93.0, 686.0], [93.1, 688.0], [93.2, 691.0], [93.3, 692.0], [93.4, 693.0], [93.5, 696.0], [93.6, 698.0], [93.7, 703.0], [93.8, 708.0], [93.9, 710.0], [94.0, 715.0], [94.1, 717.0], [94.2, 721.0], [94.3, 726.0], [94.4, 728.0], [94.5, 728.0], [94.6, 730.0], [94.7, 733.0], [94.8, 735.0], [94.9, 738.0], [95.0, 743.0], [95.1, 748.0], [95.2, 751.0], [95.3, 754.0], [95.4, 760.0], [95.5, 764.0], [95.6, 767.0], [95.7, 770.0], [95.8, 772.0], [95.9, 775.0], [96.0, 778.0], [96.1, 779.0], [96.2, 781.0], [96.3, 783.0], [96.4, 786.0], [96.5, 787.0], [96.6, 789.0], [96.7, 792.0], [96.8, 794.0], [96.9, 796.0], [97.0, 799.0], [97.1, 801.0], [97.2, 805.0], [97.3, 810.0], [97.4, 812.0], [97.5, 816.0], [97.6, 821.0], [97.7, 832.0], [97.8, 838.0], [97.9, 845.0], [98.0, 852.0], [98.1, 863.0], [98.2, 868.0], [98.3, 878.0], [98.4, 882.0], [98.5, 888.0], [98.6, 893.0], [98.7, 905.0], [98.8, 922.0], [98.9, 929.0], [99.0, 962.0], [99.1, 969.0], [99.2, 974.0], [99.3, 980.0], [99.4, 985.0], [99.5, 1017.0], [99.6, 1061.0], [99.7, 1179.0], [99.8, 1295.0], [99.9, 1394.0], [100.0, 1760.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2034.0, "series": [{"data": [[0.0, 433.0], [600.0, 77.0], [700.0, 166.0], [200.0, 153.0], [800.0, 77.0], [900.0, 41.0], [1000.0, 10.0], [1100.0, 4.0], [300.0, 2034.0], [1200.0, 3.0], [1300.0, 6.0], [1400.0, 2.0], [100.0, 4.0], [400.0, 1583.0], [1700.0, 1.0], [500.0, 292.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4876.0, "series": [{"data": [[0.0, 10.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4876.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 193.41936144085142, "minX": 1.75671336E12, "maxY": 193.41936144085142, "series": [{"data": [[1.75671336E12, 193.41936144085142]], "isOverall": false, "label": "Seckill Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75671336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.0, "maxY": 1295.0, "series": [{"data": [[2.0, 496.0], [3.0, 496.0], [4.0, 922.0], [6.0, 496.0], [7.0, 528.0], [8.0, 529.0], [9.0, 529.0], [10.0, 529.0], [12.0, 529.0], [13.0, 519.0], [17.0, 620.0], [18.0, 517.0], [19.0, 551.0], [21.0, 551.5], [23.0, 935.5], [24.0, 516.0], [25.0, 516.0], [26.0, 517.0], [27.0, 527.0], [28.0, 516.0], [29.0, 516.0], [30.0, 530.0], [31.0, 515.0], [33.0, 531.0], [32.0, 529.0], [35.0, 528.0], [34.0, 1295.0], [37.0, 500.0], [36.0, 893.0], [39.0, 896.0], [38.0, 499.0], [41.0, 511.0], [40.0, 499.0], [42.0, 514.0], [44.0, 702.5], [47.0, 482.0], [46.0, 514.5], [49.0, 481.0], [48.0, 481.0], [51.0, 479.0], [50.0, 479.0], [53.0, 493.0], [52.0, 498.0], [54.0, 479.0], [57.0, 496.0], [56.0, 699.5], [59.0, 484.0], [58.0, 892.0], [61.0, 881.0], [60.0, 483.0], [63.0, 888.0], [62.0, 481.0], [66.0, 903.0], [65.0, 887.0], [64.0, 484.0], [71.0, 520.0], [70.0, 504.0], [69.0, 518.0], [68.0, 517.5], [75.0, 503.0], [74.0, 504.0], [73.0, 503.0], [72.0, 890.0], [79.0, 520.0], [78.0, 519.0], [77.0, 520.0], [76.0, 503.0], [83.0, 485.0], [82.0, 489.0], [81.0, 869.0], [80.0, 520.0], [87.0, 486.0], [86.0, 487.0], [85.0, 487.0], [84.0, 489.0], [90.0, 384.57142857142856], [91.0, 526.0], [89.0, 868.0], [88.0, 881.0], [95.0, 514.0], [94.0, 514.0], [93.0, 516.0], [92.0, 526.0], [96.0, 316.0], [98.0, 358.0], [99.0, 189.0], [97.0, 511.0], [100.0, 394.16666666666663], [103.0, 407.5], [102.0, 882.0], [101.0, 528.0], [105.0, 281.5], [107.0, 510.0], [106.0, 509.0], [104.0, 510.0], [108.0, 385.0], [110.0, 450.0], [111.0, 345.0], [109.0, 507.0], [112.0, 327.28571428571433], [113.0, 422.25], [114.0, 392.75], [115.0, 522.5], [117.0, 427.2], [118.0, 454.8], [119.0, 386.0], [116.0, 491.0], [120.0, 495.0], [121.0, 309.0], [122.0, 559.0], [123.0, 471.25], [124.0, 233.0], [127.0, 298.83333333333337], [126.0, 505.5], [125.0, 511.0], [128.0, 307.6], [129.0, 195.6], [131.0, 280.1666666666667], [132.0, 311.6666666666667], [135.0, 287.0], [134.0, 496.0], [133.0, 849.0], [130.0, 469.0], [137.0, 265.6666666666667], [138.0, 250.0], [140.0, 266.625], [141.0, 212.0], [143.0, 253.00000000000003], [139.0, 492.0], [136.0, 498.0], [146.0, 456.2], [148.0, 585.0], [149.0, 278.8333333333333], [151.0, 315.75], [150.0, 481.0], [147.0, 497.75], [152.0, 236.0], [154.0, 336.2], [156.0, 249.90909090909088], [159.0, 253.33333333333331], [157.0, 506.5], [160.0, 225.0], [161.0, 365.5], [162.0, 236.4], [163.0, 239.0], [164.0, 519.25], [165.0, 340.0], [166.0, 329.16666666666663], [167.0, 370.0], [169.0, 260.25], [170.0, 257.2], [171.0, 343.6666666666667], [172.0, 614.0], [173.0, 370.0], [174.0, 375.0], [175.0, 266.5], [168.0, 493.0], [176.0, 373.5], [178.0, 385.5], [179.0, 261.0], [181.0, 276.0], [182.0, 365.42857142857144], [180.0, 502.0], [177.0, 468.5], [184.0, 540.3333333333334], [188.0, 276.2857142857143], [189.0, 360.8], [191.0, 464.0], [190.0, 476.0], [186.0, 466.0], [185.0, 466.0], [199.0, 327.0], [198.0, 829.0], [197.0, 443.5], [195.0, 341.66666666666663], [192.0, 472.0], [200.0, 396.07546327305243], [1.0, 495.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}, {"data": [[193.41936144085142, 397.14347114203775]], "isOverall": false, "label": "POST Seckill Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 29006.933333333334, "minX": 1.75671336E12, "maxY": 36343.666666666664, "series": [{"data": [[1.75671336E12, 29006.933333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75671336E12, 36343.666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75671336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 397.14347114203775, "minX": 1.75671336E12, "maxY": 397.14347114203775, "series": [{"data": [[1.75671336E12, 397.14347114203775]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75671336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 397.0980352026196, "minX": 1.75671336E12, "maxY": 397.0980352026196, "series": [{"data": [[1.75671336E12, 397.0980352026196]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75671336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.42632009823986844, "minX": 1.75671336E12, "maxY": 0.42632009823986844, "series": [{"data": [[1.75671336E12, 0.42632009823986844]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75671336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 161.0, "minX": 1.75671336E12, "maxY": 355.0, "series": [{"data": [[1.75671336E12, 355.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75671336E12, 161.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75671336E12, 354.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75671336E12, 355.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75671336E12, 269.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75671336E12, 355.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75671336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 269.5, "minX": 113.0, "maxY": 517.0, "series": [{"data": [[319.0, 269.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[515.0, 384.0], [527.0, 384.0], [552.0, 370.0], [567.0, 360.0], [319.0, 275.0], [420.0, 444.0], [438.0, 417.5], [460.0, 431.0], [113.0, 517.0], [472.0, 408.0], [503.0, 405.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 567.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 268.5, "minX": 113.0, "maxY": 516.0, "series": [{"data": [[319.0, 268.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[515.0, 384.0], [527.0, 384.0], [552.0, 370.0], [567.0, 360.0], [319.0, 275.0], [420.0, 444.0], [438.0, 417.5], [460.0, 431.0], [113.0, 516.0], [472.0, 408.0], [503.0, 405.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 567.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 81.43333333333334, "minX": 1.75671336E12, "maxY": 81.43333333333334, "series": [{"data": [[1.75671336E12, 81.43333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75671336E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75671336E12, "maxY": 81.26666666666667, "series": [{"data": [[1.75671336E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75671336E12, 81.26666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75671336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75671336E12, "maxY": 81.26666666666667, "series": [{"data": [[1.75671336E12, 81.26666666666667]], "isOverall": false, "label": "POST Seckill Request-failure", "isController": false}, {"data": [[1.75671336E12, 0.16666666666666666]], "isOverall": false, "label": "POST Seckill Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75671336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75671336E12, "maxY": 81.26666666666667, "series": [{"data": [[1.75671336E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75671336E12, 81.26666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75671336E12, "title": "Total Transactions Per Second"}},
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

