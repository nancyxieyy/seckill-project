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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 2422.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 7.0], [7.2, 7.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 16.0], [24.3, 16.0], [24.4, 16.0], [24.5, 16.0], [24.6, 16.0], [24.7, 16.0], [24.8, 16.0], [24.9, 16.0], [25.0, 17.0], [25.1, 17.0], [25.2, 17.0], [25.3, 17.0], [25.4, 17.0], [25.5, 17.0], [25.6, 18.0], [25.7, 18.0], [25.8, 18.0], [25.9, 18.0], [26.0, 18.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 19.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 22.0], [27.5, 22.0], [27.6, 22.0], [27.7, 23.0], [27.8, 23.0], [27.9, 23.0], [28.0, 24.0], [28.1, 24.0], [28.2, 25.0], [28.3, 25.0], [28.4, 25.0], [28.5, 26.0], [28.6, 26.0], [28.7, 27.0], [28.8, 28.0], [28.9, 28.0], [29.0, 28.0], [29.1, 29.0], [29.2, 29.0], [29.3, 30.0], [29.4, 31.0], [29.5, 31.0], [29.6, 32.0], [29.7, 32.0], [29.8, 33.0], [29.9, 33.0], [30.0, 34.0], [30.1, 34.0], [30.2, 36.0], [30.3, 37.0], [30.4, 38.0], [30.5, 39.0], [30.6, 40.0], [30.7, 41.0], [30.8, 43.0], [30.9, 46.0], [31.0, 51.0], [31.1, 58.0], [31.2, 61.0], [31.3, 67.0], [31.4, 73.0], [31.5, 74.0], [31.6, 74.0], [31.7, 75.0], [31.8, 79.0], [31.9, 80.0], [32.0, 80.0], [32.1, 81.0], [32.2, 81.0], [32.3, 81.0], [32.4, 81.0], [32.5, 81.0], [32.6, 82.0], [32.7, 82.0], [32.8, 82.0], [32.9, 83.0], [33.0, 83.0], [33.1, 85.0], [33.2, 86.0], [33.3, 86.0], [33.4, 87.0], [33.5, 87.0], [33.6, 88.0], [33.7, 88.0], [33.8, 89.0], [33.9, 90.0], [34.0, 90.0], [34.1, 91.0], [34.2, 93.0], [34.3, 93.0], [34.4, 93.0], [34.5, 94.0], [34.6, 94.0], [34.7, 96.0], [34.8, 96.0], [34.9, 97.0], [35.0, 98.0], [35.1, 99.0], [35.2, 100.0], [35.3, 101.0], [35.4, 102.0], [35.5, 105.0], [35.6, 107.0], [35.7, 109.0], [35.8, 111.0], [35.9, 112.0], [36.0, 113.0], [36.1, 113.0], [36.2, 114.0], [36.3, 115.0], [36.4, 116.0], [36.5, 116.0], [36.6, 117.0], [36.7, 118.0], [36.8, 118.0], [36.9, 119.0], [37.0, 120.0], [37.1, 122.0], [37.2, 124.0], [37.3, 125.0], [37.4, 125.0], [37.5, 126.0], [37.6, 126.0], [37.7, 127.0], [37.8, 128.0], [37.9, 128.0], [38.0, 129.0], [38.1, 129.0], [38.2, 129.0], [38.3, 130.0], [38.4, 130.0], [38.5, 130.0], [38.6, 131.0], [38.7, 131.0], [38.8, 131.0], [38.9, 132.0], [39.0, 132.0], [39.1, 132.0], [39.2, 133.0], [39.3, 133.0], [39.4, 133.0], [39.5, 134.0], [39.6, 135.0], [39.7, 135.0], [39.8, 136.0], [39.9, 137.0], [40.0, 137.0], [40.1, 137.0], [40.2, 138.0], [40.3, 138.0], [40.4, 138.0], [40.5, 138.0], [40.6, 139.0], [40.7, 139.0], [40.8, 139.0], [40.9, 140.0], [41.0, 140.0], [41.1, 140.0], [41.2, 140.0], [41.3, 141.0], [41.4, 141.0], [41.5, 141.0], [41.6, 142.0], [41.7, 142.0], [41.8, 142.0], [41.9, 142.0], [42.0, 143.0], [42.1, 143.0], [42.2, 143.0], [42.3, 143.0], [42.4, 144.0], [42.5, 144.0], [42.6, 145.0], [42.7, 145.0], [42.8, 145.0], [42.9, 146.0], [43.0, 146.0], [43.1, 146.0], [43.2, 147.0], [43.3, 147.0], [43.4, 147.0], [43.5, 147.0], [43.6, 147.0], [43.7, 148.0], [43.8, 148.0], [43.9, 149.0], [44.0, 149.0], [44.1, 149.0], [44.2, 150.0], [44.3, 150.0], [44.4, 150.0], [44.5, 150.0], [44.6, 151.0], [44.7, 151.0], [44.8, 151.0], [44.9, 151.0], [45.0, 151.0], [45.1, 151.0], [45.2, 151.0], [45.3, 152.0], [45.4, 152.0], [45.5, 152.0], [45.6, 152.0], [45.7, 152.0], [45.8, 152.0], [45.9, 152.0], [46.0, 153.0], [46.1, 153.0], [46.2, 153.0], [46.3, 153.0], [46.4, 153.0], [46.5, 154.0], [46.6, 154.0], [46.7, 154.0], [46.8, 154.0], [46.9, 154.0], [47.0, 154.0], [47.1, 155.0], [47.2, 155.0], [47.3, 156.0], [47.4, 156.0], [47.5, 156.0], [47.6, 157.0], [47.7, 157.0], [47.8, 157.0], [47.9, 157.0], [48.0, 158.0], [48.1, 158.0], [48.2, 158.0], [48.3, 158.0], [48.4, 159.0], [48.5, 159.0], [48.6, 159.0], [48.7, 159.0], [48.8, 160.0], [48.9, 160.0], [49.0, 160.0], [49.1, 160.0], [49.2, 160.0], [49.3, 161.0], [49.4, 161.0], [49.5, 161.0], [49.6, 161.0], [49.7, 161.0], [49.8, 162.0], [49.9, 162.0], [50.0, 162.0], [50.1, 162.0], [50.2, 162.0], [50.3, 162.0], [50.4, 163.0], [50.5, 163.0], [50.6, 163.0], [50.7, 163.0], [50.8, 164.0], [50.9, 164.0], [51.0, 164.0], [51.1, 165.0], [51.2, 165.0], [51.3, 166.0], [51.4, 166.0], [51.5, 167.0], [51.6, 167.0], [51.7, 168.0], [51.8, 168.0], [51.9, 169.0], [52.0, 169.0], [52.1, 169.0], [52.2, 170.0], [52.3, 170.0], [52.4, 171.0], [52.5, 171.0], [52.6, 172.0], [52.7, 172.0], [52.8, 173.0], [52.9, 173.0], [53.0, 174.0], [53.1, 174.0], [53.2, 174.0], [53.3, 174.0], [53.4, 175.0], [53.5, 175.0], [53.6, 175.0], [53.7, 175.0], [53.8, 175.0], [53.9, 176.0], [54.0, 176.0], [54.1, 176.0], [54.2, 176.0], [54.3, 177.0], [54.4, 177.0], [54.5, 177.0], [54.6, 177.0], [54.7, 178.0], [54.8, 178.0], [54.9, 178.0], [55.0, 178.0], [55.1, 179.0], [55.2, 179.0], [55.3, 179.0], [55.4, 180.0], [55.5, 180.0], [55.6, 180.0], [55.7, 181.0], [55.8, 182.0], [55.9, 182.0], [56.0, 182.0], [56.1, 183.0], [56.2, 183.0], [56.3, 183.0], [56.4, 184.0], [56.5, 184.0], [56.6, 185.0], [56.7, 185.0], [56.8, 186.0], [56.9, 186.0], [57.0, 187.0], [57.1, 187.0], [57.2, 187.0], [57.3, 187.0], [57.4, 188.0], [57.5, 188.0], [57.6, 188.0], [57.7, 188.0], [57.8, 189.0], [57.9, 189.0], [58.0, 189.0], [58.1, 190.0], [58.2, 190.0], [58.3, 190.0], [58.4, 191.0], [58.5, 191.0], [58.6, 192.0], [58.7, 193.0], [58.8, 193.0], [58.9, 194.0], [59.0, 194.0], [59.1, 194.0], [59.2, 195.0], [59.3, 195.0], [59.4, 195.0], [59.5, 196.0], [59.6, 197.0], [59.7, 197.0], [59.8, 198.0], [59.9, 199.0], [60.0, 199.0], [60.1, 200.0], [60.2, 200.0], [60.3, 201.0], [60.4, 201.0], [60.5, 201.0], [60.6, 202.0], [60.7, 202.0], [60.8, 203.0], [60.9, 203.0], [61.0, 204.0], [61.1, 205.0], [61.2, 205.0], [61.3, 205.0], [61.4, 206.0], [61.5, 207.0], [61.6, 207.0], [61.7, 207.0], [61.8, 208.0], [61.9, 208.0], [62.0, 208.0], [62.1, 209.0], [62.2, 209.0], [62.3, 209.0], [62.4, 210.0], [62.5, 210.0], [62.6, 210.0], [62.7, 210.0], [62.8, 211.0], [62.9, 211.0], [63.0, 212.0], [63.1, 212.0], [63.2, 212.0], [63.3, 214.0], [63.4, 214.0], [63.5, 215.0], [63.6, 215.0], [63.7, 216.0], [63.8, 217.0], [63.9, 217.0], [64.0, 218.0], [64.1, 219.0], [64.2, 219.0], [64.3, 220.0], [64.4, 221.0], [64.5, 222.0], [64.6, 222.0], [64.7, 223.0], [64.8, 223.0], [64.9, 224.0], [65.0, 224.0], [65.1, 224.0], [65.2, 225.0], [65.3, 226.0], [65.4, 226.0], [65.5, 227.0], [65.6, 227.0], [65.7, 228.0], [65.8, 228.0], [65.9, 229.0], [66.0, 229.0], [66.1, 230.0], [66.2, 230.0], [66.3, 231.0], [66.4, 231.0], [66.5, 232.0], [66.6, 232.0], [66.7, 233.0], [66.8, 233.0], [66.9, 233.0], [67.0, 234.0], [67.1, 235.0], [67.2, 235.0], [67.3, 236.0], [67.4, 236.0], [67.5, 237.0], [67.6, 238.0], [67.7, 238.0], [67.8, 240.0], [67.9, 241.0], [68.0, 241.0], [68.1, 242.0], [68.2, 242.0], [68.3, 242.0], [68.4, 243.0], [68.5, 244.0], [68.6, 245.0], [68.7, 245.0], [68.8, 246.0], [68.9, 247.0], [69.0, 247.0], [69.1, 248.0], [69.2, 248.0], [69.3, 249.0], [69.4, 250.0], [69.5, 251.0], [69.6, 252.0], [69.7, 253.0], [69.8, 254.0], [69.9, 254.0], [70.0, 255.0], [70.1, 255.0], [70.2, 257.0], [70.3, 258.0], [70.4, 259.0], [70.5, 260.0], [70.6, 261.0], [70.7, 262.0], [70.8, 263.0], [70.9, 264.0], [71.0, 265.0], [71.1, 266.0], [71.2, 266.0], [71.3, 267.0], [71.4, 268.0], [71.5, 269.0], [71.6, 271.0], [71.7, 272.0], [71.8, 274.0], [71.9, 274.0], [72.0, 275.0], [72.1, 276.0], [72.2, 277.0], [72.3, 279.0], [72.4, 281.0], [72.5, 281.0], [72.6, 283.0], [72.7, 284.0], [72.8, 284.0], [72.9, 285.0], [73.0, 286.0], [73.1, 286.0], [73.2, 287.0], [73.3, 288.0], [73.4, 288.0], [73.5, 288.0], [73.6, 289.0], [73.7, 290.0], [73.8, 291.0], [73.9, 292.0], [74.0, 292.0], [74.1, 293.0], [74.2, 294.0], [74.3, 294.0], [74.4, 295.0], [74.5, 295.0], [74.6, 296.0], [74.7, 296.0], [74.8, 297.0], [74.9, 297.0], [75.0, 298.0], [75.1, 298.0], [75.2, 299.0], [75.3, 299.0], [75.4, 300.0], [75.5, 300.0], [75.6, 300.0], [75.7, 301.0], [75.8, 302.0], [75.9, 302.0], [76.0, 303.0], [76.1, 304.0], [76.2, 304.0], [76.3, 306.0], [76.4, 306.0], [76.5, 308.0], [76.6, 309.0], [76.7, 310.0], [76.8, 311.0], [76.9, 312.0], [77.0, 314.0], [77.1, 315.0], [77.2, 316.0], [77.3, 317.0], [77.4, 318.0], [77.5, 320.0], [77.6, 321.0], [77.7, 321.0], [77.8, 323.0], [77.9, 324.0], [78.0, 325.0], [78.1, 327.0], [78.2, 327.0], [78.3, 328.0], [78.4, 330.0], [78.5, 331.0], [78.6, 332.0], [78.7, 333.0], [78.8, 334.0], [78.9, 335.0], [79.0, 337.0], [79.1, 338.0], [79.2, 339.0], [79.3, 340.0], [79.4, 343.0], [79.5, 345.0], [79.6, 347.0], [79.7, 349.0], [79.8, 351.0], [79.9, 353.0], [80.0, 354.0], [80.1, 356.0], [80.2, 359.0], [80.3, 360.0], [80.4, 361.0], [80.5, 362.0], [80.6, 364.0], [80.7, 365.0], [80.8, 366.0], [80.9, 367.0], [81.0, 369.0], [81.1, 370.0], [81.2, 371.0], [81.3, 373.0], [81.4, 375.0], [81.5, 375.0], [81.6, 376.0], [81.7, 377.0], [81.8, 379.0], [81.9, 380.0], [82.0, 381.0], [82.1, 383.0], [82.2, 384.0], [82.3, 386.0], [82.4, 387.0], [82.5, 388.0], [82.6, 389.0], [82.7, 390.0], [82.8, 391.0], [82.9, 392.0], [83.0, 394.0], [83.1, 396.0], [83.2, 397.0], [83.3, 398.0], [83.4, 399.0], [83.5, 400.0], [83.6, 401.0], [83.7, 403.0], [83.8, 405.0], [83.9, 407.0], [84.0, 408.0], [84.1, 409.0], [84.2, 410.0], [84.3, 411.0], [84.4, 412.0], [84.5, 413.0], [84.6, 413.0], [84.7, 413.0], [84.8, 415.0], [84.9, 416.0], [85.0, 417.0], [85.1, 418.0], [85.2, 419.0], [85.3, 421.0], [85.4, 426.0], [85.5, 429.0], [85.6, 431.0], [85.7, 433.0], [85.8, 435.0], [85.9, 436.0], [86.0, 437.0], [86.1, 439.0], [86.2, 441.0], [86.3, 442.0], [86.4, 445.0], [86.5, 447.0], [86.6, 449.0], [86.7, 451.0], [86.8, 454.0], [86.9, 457.0], [87.0, 459.0], [87.1, 463.0], [87.2, 465.0], [87.3, 473.0], [87.4, 477.0], [87.5, 480.0], [87.6, 482.0], [87.7, 488.0], [87.8, 492.0], [87.9, 498.0], [88.0, 502.0], [88.1, 509.0], [88.2, 513.0], [88.3, 517.0], [88.4, 520.0], [88.5, 524.0], [88.6, 526.0], [88.7, 528.0], [88.8, 531.0], [88.9, 533.0], [89.0, 535.0], [89.1, 537.0], [89.2, 542.0], [89.3, 549.0], [89.4, 552.0], [89.5, 554.0], [89.6, 566.0], [89.7, 573.0], [89.8, 581.0], [89.9, 588.0], [90.0, 592.0], [90.1, 595.0], [90.2, 600.0], [90.3, 605.0], [90.4, 607.0], [90.5, 612.0], [90.6, 619.0], [90.7, 623.0], [90.8, 627.0], [90.9, 631.0], [91.0, 635.0], [91.1, 638.0], [91.2, 641.0], [91.3, 643.0], [91.4, 645.0], [91.5, 649.0], [91.6, 655.0], [91.7, 658.0], [91.8, 661.0], [91.9, 666.0], [92.0, 672.0], [92.1, 676.0], [92.2, 679.0], [92.3, 681.0], [92.4, 684.0], [92.5, 685.0], [92.6, 688.0], [92.7, 692.0], [92.8, 695.0], [92.9, 697.0], [93.0, 698.0], [93.1, 699.0], [93.2, 700.0], [93.3, 702.0], [93.4, 705.0], [93.5, 708.0], [93.6, 714.0], [93.7, 723.0], [93.8, 731.0], [93.9, 734.0], [94.0, 741.0], [94.1, 746.0], [94.2, 755.0], [94.3, 759.0], [94.4, 782.0], [94.5, 806.0], [94.6, 811.0], [94.7, 815.0], [94.8, 821.0], [94.9, 833.0], [95.0, 838.0], [95.1, 846.0], [95.2, 850.0], [95.3, 858.0], [95.4, 867.0], [95.5, 880.0], [95.6, 887.0], [95.7, 891.0], [95.8, 894.0], [95.9, 897.0], [96.0, 900.0], [96.1, 906.0], [96.2, 920.0], [96.3, 927.0], [96.4, 943.0], [96.5, 977.0], [96.6, 982.0], [96.7, 994.0], [96.8, 1001.0], [96.9, 1008.0], [97.0, 1022.0], [97.1, 1032.0], [97.2, 1039.0], [97.3, 1047.0], [97.4, 1058.0], [97.5, 1063.0], [97.6, 1071.0], [97.7, 1087.0], [97.8, 1091.0], [97.9, 1097.0], [98.0, 1111.0], [98.1, 1127.0], [98.2, 1142.0], [98.3, 1206.0], [98.4, 1274.0], [98.5, 1284.0], [98.6, 1293.0], [98.7, 1300.0], [98.8, 1305.0], [98.9, 1314.0], [99.0, 1320.0], [99.1, 1333.0], [99.2, 1349.0], [99.3, 1387.0], [99.4, 1477.0], [99.5, 1514.0], [99.6, 1579.0], [99.7, 1620.0], [99.8, 1691.0], [99.9, 1896.0], [100.0, 2422.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2912.0, "series": [{"data": [[0.0, 2912.0], [2100.0, 1.0], [2200.0, 1.0], [600.0, 243.0], [2400.0, 1.0], [700.0, 108.0], [200.0, 1262.0], [800.0, 127.0], [900.0, 67.0], [1000.0, 95.0], [1100.0, 30.0], [300.0, 674.0], [1200.0, 34.0], [1300.0, 52.0], [1400.0, 12.0], [1500.0, 14.0], [100.0, 2065.0], [400.0, 372.0], [1600.0, 14.0], [1700.0, 4.0], [1800.0, 4.0], [500.0, 186.0], [2000.0, 5.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8273.0, "series": [{"data": [[0.0, 10.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8273.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 191.7531138790037, "minX": 1.75730784E12, "maxY": 196.7325600662798, "series": [{"data": [[1.75730784E12, 191.7531138790037], [1.7573079E12, 196.7325600662798]], "isOverall": false, "label": "Seckill Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7573079E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 54.0, "minX": 10.0, "maxY": 2000.0, "series": [{"data": [[10.0, 571.8333333333333], [11.0, 391.0], [16.0, 400.8888888888889], [17.0, 415.0], [27.0, 520.3], [28.0, 2000.0], [35.0, 413.0], [34.0, 508.8333333333333], [37.0, 416.0], [36.0, 983.0], [39.0, 413.0], [38.0, 416.0], [40.0, 982.0], [43.0, 831.5], [42.0, 413.0], [45.0, 413.0], [44.0, 414.0], [47.0, 685.0], [46.0, 682.0], [49.0, 413.0], [48.0, 412.0], [50.0, 1319.0], [53.0, 550.5], [52.0, 413.0], [55.0, 418.0], [54.0, 685.0], [56.0, 684.0], [59.0, 418.0], [58.0, 419.0], [61.0, 682.0], [60.0, 415.0], [63.0, 416.0], [62.0, 413.0], [66.0, 415.0], [65.0, 419.0], [64.0, 410.0], [71.0, 536.8], [75.0, 437.0], [74.0, 433.0], [72.0, 1000.0], [78.0, 437.0], [77.0, 436.5], [80.0, 527.25], [83.0, 305.5], [81.0, 442.0], [84.0, 434.6666666666667], [85.0, 330.0], [86.0, 343.5], [87.0, 438.0], [88.0, 514.5], [89.0, 332.0], [90.0, 362.4], [92.0, 900.0], [93.0, 348.0], [95.0, 280.8333333333333], [94.0, 702.0], [96.0, 540.0], [97.0, 323.0], [98.0, 353.0], [99.0, 670.0], [100.0, 335.1], [101.0, 384.0], [102.0, 183.0], [103.0, 394.0], [105.0, 264.0833333333333], [107.0, 307.0], [106.0, 994.0], [104.0, 435.0], [109.0, 466.5], [110.0, 336.0], [111.0, 242.0], [108.0, 436.0], [112.0, 288.0], [113.0, 464.5], [114.0, 284.0], [115.0, 319.33333333333337], [116.0, 267.6], [117.0, 328.0], [118.0, 322.5], [119.0, 223.66666666666669], [120.0, 372.0], [123.0, 749.5], [122.0, 450.0], [127.0, 463.0], [126.0, 581.0], [124.0, 453.0], [130.0, 69.0], [132.0, 312.5], [133.0, 353.5], [134.0, 353.5], [135.0, 156.25], [131.0, 583.0], [129.0, 463.0], [128.0, 700.0], [136.0, 263.0], [137.0, 171.66666666666666], [138.0, 193.0], [139.0, 221.2], [140.0, 289.8333333333333], [141.0, 217.0], [142.0, 190.66666666666666], [143.0, 262.8], [144.0, 373.4], [145.0, 323.25], [146.0, 287.0], [147.0, 222.75], [148.0, 323.8333333333333], [149.0, 174.0], [150.0, 262.75], [151.0, 365.6], [152.0, 189.08333333333334], [153.0, 286.5], [154.0, 220.33333333333331], [155.0, 335.0], [156.0, 236.875], [157.0, 67.0], [158.0, 205.8], [159.0, 213.57142857142856], [160.0, 258.0], [161.0, 136.5], [162.0, 142.25], [163.0, 68.5], [164.0, 261.83333333333337], [165.0, 385.0], [166.0, 113.1], [167.0, 169.22222222222223], [168.0, 271.5], [169.0, 185.63636363636363], [170.0, 219.4], [171.0, 95.33333333333333], [172.0, 61.0], [173.0, 374.25], [174.0, 237.18181818181816], [175.0, 404.0], [176.0, 263.6], [177.0, 185.33333333333331], [178.0, 126.5], [179.0, 109.14285714285714], [180.0, 207.0], [181.0, 125.42857142857142], [182.0, 55.714285714285715], [183.0, 57.2], [184.0, 285.33333333333337], [185.0, 255.0], [187.0, 274.25], [189.0, 159.0], [190.0, 54.0], [191.0, 288.2], [188.0, 384.0], [192.0, 151.88888888888889], [193.0, 180.11111111111111], [195.0, 302.1666666666667], [196.0, 140.72727272727275], [198.0, 130.33333333333334], [199.0, 164.0], [194.0, 636.0], [200.0, 229.75623700623711]], "isOverall": false, "label": "POST Seckill Request", "isController": false}, {"data": [[195.38114209827347, 234.1524809851506]], "isOverall": false, "label": "POST Seckill Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10800.916666666666, "minX": 1.75730784E12, "maxY": 44799.51666666667, "series": [{"data": [[1.75730784E12, 10800.916666666666], [1.7573079E12, 28968.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75730784E12, 16687.866666666665], [1.7573079E12, 44799.51666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7573079E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 164.04181494661967, "minX": 1.75730784E12, "maxY": 260.2682684341342, "series": [{"data": [[1.75730784E12, 164.04181494661967], [1.7573079E12, 260.2682684341342]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7573079E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 163.89946619217082, "minX": 1.75730784E12, "maxY": 260.1310687655343, "series": [{"data": [[1.75730784E12, 163.89946619217082], [1.7573079E12, 260.1310687655343]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7573079E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4879867439933729, "minX": 1.75730784E12, "maxY": 0.678380782918149, "series": [{"data": [[1.75730784E12, 0.678380782918149], [1.7573079E12, 0.4879867439933729]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7573079E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 158.0, "minX": 1.75730784E12, "maxY": 382.0, "series": [{"data": [[1.75730784E12, 382.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75730784E12, 158.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75730784E12, 376.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75730784E12, 382.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75730784E12, 246.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75730784E12, 382.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75730784E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 97.0, "minX": 59.0, "maxY": 403.0, "series": [{"data": [[59.0, 246.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1204.0, 147.0], [1165.0, 161.0], [316.0, 232.0], [1427.0, 97.0], [798.0, 160.0], [434.0, 387.5], [916.0, 209.0], [59.0, 321.0], [469.0, 403.0], [985.0, 174.0], [510.0, 259.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1427.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 97.0, "minX": 59.0, "maxY": 403.0, "series": [{"data": [[59.0, 246.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1204.0, 147.0], [1165.0, 161.0], [316.0, 232.0], [1427.0, 97.0], [798.0, 160.0], [434.0, 387.0], [916.0, 209.0], [59.0, 320.0], [469.0, 403.0], [985.0, 174.0], [510.0, 259.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1427.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 40.8, "minX": 1.75730784E12, "maxY": 97.25, "series": [{"data": [[1.75730784E12, 40.8], [1.7573079E12, 97.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7573079E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75730784E12, "maxY": 100.58333333333333, "series": [{"data": [[1.75730784E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75730784E12, 37.3], [1.7573079E12, 100.58333333333333]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7573079E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75730784E12, "maxY": 100.58333333333333, "series": [{"data": [[1.75730784E12, 37.3], [1.7573079E12, 100.58333333333333]], "isOverall": false, "label": "POST Seckill Request-failure", "isController": false}, {"data": [[1.75730784E12, 0.16666666666666666]], "isOverall": false, "label": "POST Seckill Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7573079E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.75730784E12, "maxY": 100.58333333333333, "series": [{"data": [[1.75730784E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75730784E12, 37.3], [1.7573079E12, 100.58333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7573079E12, "title": "Total Transactions Per Second"}},
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

