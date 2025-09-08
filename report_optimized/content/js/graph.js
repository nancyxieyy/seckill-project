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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1435.0, "series": [{"data": [[0.0, 2.0], [0.1, 5.0], [0.2, 5.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 10.0], [3.4, 10.0], [3.5, 10.0], [3.6, 10.0], [3.7, 10.0], [3.8, 10.0], [3.9, 10.0], [4.0, 10.0], [4.1, 10.0], [4.2, 11.0], [4.3, 11.0], [4.4, 11.0], [4.5, 11.0], [4.6, 11.0], [4.7, 11.0], [4.8, 11.0], [4.9, 11.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 12.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 14.0], [6.3, 14.0], [6.4, 14.0], [6.5, 14.0], [6.6, 14.0], [6.7, 14.0], [6.8, 14.0], [6.9, 15.0], [7.0, 15.0], [7.1, 15.0], [7.2, 15.0], [7.3, 15.0], [7.4, 15.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 17.0], [8.0, 17.0], [8.1, 17.0], [8.2, 18.0], [8.3, 18.0], [8.4, 18.0], [8.5, 18.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 19.0], [9.2, 20.0], [9.3, 20.0], [9.4, 20.0], [9.5, 20.0], [9.6, 20.0], [9.7, 21.0], [9.8, 21.0], [9.9, 21.0], [10.0, 21.0], [10.1, 22.0], [10.2, 22.0], [10.3, 22.0], [10.4, 22.0], [10.5, 23.0], [10.6, 23.0], [10.7, 23.0], [10.8, 24.0], [10.9, 24.0], [11.0, 24.0], [11.1, 25.0], [11.2, 25.0], [11.3, 25.0], [11.4, 26.0], [11.5, 26.0], [11.6, 26.0], [11.7, 26.0], [11.8, 27.0], [11.9, 27.0], [12.0, 27.0], [12.1, 28.0], [12.2, 28.0], [12.3, 29.0], [12.4, 29.0], [12.5, 30.0], [12.6, 30.0], [12.7, 31.0], [12.8, 31.0], [12.9, 31.0], [13.0, 32.0], [13.1, 32.0], [13.2, 32.0], [13.3, 33.0], [13.4, 33.0], [13.5, 34.0], [13.6, 34.0], [13.7, 35.0], [13.8, 35.0], [13.9, 35.0], [14.0, 36.0], [14.1, 36.0], [14.2, 37.0], [14.3, 37.0], [14.4, 37.0], [14.5, 38.0], [14.6, 38.0], [14.7, 39.0], [14.8, 39.0], [14.9, 40.0], [15.0, 40.0], [15.1, 40.0], [15.2, 41.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 43.0], [15.7, 43.0], [15.8, 44.0], [15.9, 44.0], [16.0, 45.0], [16.1, 46.0], [16.2, 46.0], [16.3, 47.0], [16.4, 47.0], [16.5, 48.0], [16.6, 48.0], [16.7, 49.0], [16.8, 49.0], [16.9, 50.0], [17.0, 51.0], [17.1, 51.0], [17.2, 52.0], [17.3, 53.0], [17.4, 53.0], [17.5, 54.0], [17.6, 54.0], [17.7, 55.0], [17.8, 55.0], [17.9, 56.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 58.0], [18.4, 58.0], [18.5, 59.0], [18.6, 59.0], [18.7, 59.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 60.0], [19.2, 61.0], [19.3, 61.0], [19.4, 61.0], [19.5, 62.0], [19.6, 62.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 64.0], [20.1, 64.0], [20.2, 64.0], [20.3, 65.0], [20.4, 65.0], [20.5, 65.0], [20.6, 65.0], [20.7, 66.0], [20.8, 66.0], [20.9, 66.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 67.0], [21.4, 68.0], [21.5, 68.0], [21.6, 68.0], [21.7, 69.0], [21.8, 69.0], [21.9, 69.0], [22.0, 70.0], [22.1, 70.0], [22.2, 71.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 72.0], [22.7, 72.0], [22.8, 72.0], [22.9, 72.0], [23.0, 73.0], [23.1, 73.0], [23.2, 73.0], [23.3, 73.0], [23.4, 74.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 74.0], [23.9, 75.0], [24.0, 75.0], [24.1, 75.0], [24.2, 75.0], [24.3, 76.0], [24.4, 76.0], [24.5, 76.0], [24.6, 76.0], [24.7, 76.0], [24.8, 77.0], [24.9, 77.0], [25.0, 77.0], [25.1, 77.0], [25.2, 77.0], [25.3, 78.0], [25.4, 78.0], [25.5, 78.0], [25.6, 78.0], [25.7, 79.0], [25.8, 79.0], [25.9, 80.0], [26.0, 80.0], [26.1, 80.0], [26.2, 81.0], [26.3, 81.0], [26.4, 81.0], [26.5, 81.0], [26.6, 82.0], [26.7, 82.0], [26.8, 83.0], [26.9, 83.0], [27.0, 83.0], [27.1, 84.0], [27.2, 84.0], [27.3, 84.0], [27.4, 85.0], [27.5, 85.0], [27.6, 85.0], [27.7, 85.0], [27.8, 86.0], [27.9, 86.0], [28.0, 86.0], [28.1, 86.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 87.0], [28.6, 88.0], [28.7, 88.0], [28.8, 88.0], [28.9, 88.0], [29.0, 88.0], [29.1, 89.0], [29.2, 89.0], [29.3, 89.0], [29.4, 89.0], [29.5, 89.0], [29.6, 90.0], [29.7, 90.0], [29.8, 90.0], [29.9, 90.0], [30.0, 91.0], [30.1, 91.0], [30.2, 91.0], [30.3, 91.0], [30.4, 91.0], [30.5, 92.0], [30.6, 92.0], [30.7, 92.0], [30.8, 92.0], [30.9, 92.0], [31.0, 93.0], [31.1, 93.0], [31.2, 93.0], [31.3, 93.0], [31.4, 93.0], [31.5, 94.0], [31.6, 94.0], [31.7, 94.0], [31.8, 94.0], [31.9, 95.0], [32.0, 95.0], [32.1, 95.0], [32.2, 95.0], [32.3, 95.0], [32.4, 96.0], [32.5, 96.0], [32.6, 96.0], [32.7, 96.0], [32.8, 97.0], [32.9, 97.0], [33.0, 97.0], [33.1, 97.0], [33.2, 98.0], [33.3, 98.0], [33.4, 98.0], [33.5, 98.0], [33.6, 99.0], [33.7, 99.0], [33.8, 99.0], [33.9, 99.0], [34.0, 99.0], [34.1, 100.0], [34.2, 100.0], [34.3, 100.0], [34.4, 100.0], [34.5, 100.0], [34.6, 101.0], [34.7, 101.0], [34.8, 101.0], [34.9, 101.0], [35.0, 101.0], [35.1, 101.0], [35.2, 101.0], [35.3, 101.0], [35.4, 102.0], [35.5, 102.0], [35.6, 102.0], [35.7, 102.0], [35.8, 102.0], [35.9, 102.0], [36.0, 102.0], [36.1, 103.0], [36.2, 103.0], [36.3, 103.0], [36.4, 103.0], [36.5, 103.0], [36.6, 103.0], [36.7, 103.0], [36.8, 103.0], [36.9, 103.0], [37.0, 104.0], [37.1, 104.0], [37.2, 104.0], [37.3, 104.0], [37.4, 104.0], [37.5, 104.0], [37.6, 104.0], [37.7, 104.0], [37.8, 105.0], [37.9, 105.0], [38.0, 105.0], [38.1, 105.0], [38.2, 105.0], [38.3, 105.0], [38.4, 105.0], [38.5, 105.0], [38.6, 105.0], [38.7, 106.0], [38.8, 106.0], [38.9, 106.0], [39.0, 106.0], [39.1, 106.0], [39.2, 106.0], [39.3, 106.0], [39.4, 106.0], [39.5, 106.0], [39.6, 107.0], [39.7, 107.0], [39.8, 107.0], [39.9, 107.0], [40.0, 107.0], [40.1, 107.0], [40.2, 107.0], [40.3, 108.0], [40.4, 108.0], [40.5, 108.0], [40.6, 108.0], [40.7, 108.0], [40.8, 108.0], [40.9, 108.0], [41.0, 109.0], [41.1, 109.0], [41.2, 109.0], [41.3, 109.0], [41.4, 109.0], [41.5, 109.0], [41.6, 109.0], [41.7, 109.0], [41.8, 110.0], [41.9, 110.0], [42.0, 110.0], [42.1, 110.0], [42.2, 110.0], [42.3, 110.0], [42.4, 111.0], [42.5, 111.0], [42.6, 111.0], [42.7, 111.0], [42.8, 111.0], [42.9, 111.0], [43.0, 112.0], [43.1, 112.0], [43.2, 112.0], [43.3, 112.0], [43.4, 112.0], [43.5, 113.0], [43.6, 113.0], [43.7, 113.0], [43.8, 113.0], [43.9, 113.0], [44.0, 114.0], [44.1, 114.0], [44.2, 114.0], [44.3, 114.0], [44.4, 115.0], [44.5, 115.0], [44.6, 115.0], [44.7, 116.0], [44.8, 116.0], [44.9, 116.0], [45.0, 116.0], [45.1, 117.0], [45.2, 117.0], [45.3, 117.0], [45.4, 117.0], [45.5, 118.0], [45.6, 118.0], [45.7, 118.0], [45.8, 118.0], [45.9, 118.0], [46.0, 119.0], [46.1, 119.0], [46.2, 119.0], [46.3, 119.0], [46.4, 119.0], [46.5, 119.0], [46.6, 119.0], [46.7, 120.0], [46.8, 120.0], [46.9, 120.0], [47.0, 120.0], [47.1, 120.0], [47.2, 120.0], [47.3, 121.0], [47.4, 121.0], [47.5, 121.0], [47.6, 121.0], [47.7, 122.0], [47.8, 122.0], [47.9, 122.0], [48.0, 122.0], [48.1, 123.0], [48.2, 123.0], [48.3, 123.0], [48.4, 123.0], [48.5, 124.0], [48.6, 124.0], [48.7, 124.0], [48.8, 124.0], [48.9, 125.0], [49.0, 125.0], [49.1, 125.0], [49.2, 126.0], [49.3, 126.0], [49.4, 127.0], [49.5, 127.0], [49.6, 127.0], [49.7, 128.0], [49.8, 128.0], [49.9, 129.0], [50.0, 129.0], [50.1, 129.0], [50.2, 130.0], [50.3, 130.0], [50.4, 130.0], [50.5, 130.0], [50.6, 131.0], [50.7, 131.0], [50.8, 131.0], [50.9, 131.0], [51.0, 132.0], [51.1, 132.0], [51.2, 132.0], [51.3, 132.0], [51.4, 133.0], [51.5, 133.0], [51.6, 133.0], [51.7, 133.0], [51.8, 133.0], [51.9, 134.0], [52.0, 134.0], [52.1, 134.0], [52.2, 135.0], [52.3, 135.0], [52.4, 135.0], [52.5, 136.0], [52.6, 136.0], [52.7, 136.0], [52.8, 136.0], [52.9, 136.0], [53.0, 137.0], [53.1, 137.0], [53.2, 137.0], [53.3, 137.0], [53.4, 137.0], [53.5, 138.0], [53.6, 138.0], [53.7, 138.0], [53.8, 138.0], [53.9, 138.0], [54.0, 138.0], [54.1, 139.0], [54.2, 139.0], [54.3, 139.0], [54.4, 139.0], [54.5, 140.0], [54.6, 140.0], [54.7, 140.0], [54.8, 140.0], [54.9, 140.0], [55.0, 141.0], [55.1, 141.0], [55.2, 141.0], [55.3, 141.0], [55.4, 142.0], [55.5, 142.0], [55.6, 142.0], [55.7, 142.0], [55.8, 143.0], [55.9, 143.0], [56.0, 143.0], [56.1, 144.0], [56.2, 144.0], [56.3, 144.0], [56.4, 145.0], [56.5, 145.0], [56.6, 145.0], [56.7, 145.0], [56.8, 146.0], [56.9, 146.0], [57.0, 146.0], [57.1, 147.0], [57.2, 147.0], [57.3, 147.0], [57.4, 148.0], [57.5, 148.0], [57.6, 148.0], [57.7, 148.0], [57.8, 149.0], [57.9, 149.0], [58.0, 149.0], [58.1, 149.0], [58.2, 150.0], [58.3, 150.0], [58.4, 150.0], [58.5, 150.0], [58.6, 151.0], [58.7, 151.0], [58.8, 151.0], [58.9, 151.0], [59.0, 152.0], [59.1, 152.0], [59.2, 152.0], [59.3, 152.0], [59.4, 153.0], [59.5, 153.0], [59.6, 153.0], [59.7, 154.0], [59.8, 154.0], [59.9, 154.0], [60.0, 155.0], [60.1, 155.0], [60.2, 155.0], [60.3, 156.0], [60.4, 156.0], [60.5, 156.0], [60.6, 156.0], [60.7, 157.0], [60.8, 157.0], [60.9, 157.0], [61.0, 157.0], [61.1, 158.0], [61.2, 158.0], [61.3, 158.0], [61.4, 158.0], [61.5, 158.0], [61.6, 159.0], [61.7, 159.0], [61.8, 159.0], [61.9, 159.0], [62.0, 160.0], [62.1, 160.0], [62.2, 160.0], [62.3, 160.0], [62.4, 160.0], [62.5, 160.0], [62.6, 161.0], [62.7, 161.0], [62.8, 161.0], [62.9, 161.0], [63.0, 161.0], [63.1, 162.0], [63.2, 162.0], [63.3, 162.0], [63.4, 162.0], [63.5, 162.0], [63.6, 162.0], [63.7, 162.0], [63.8, 163.0], [63.9, 163.0], [64.0, 163.0], [64.1, 163.0], [64.2, 163.0], [64.3, 164.0], [64.4, 164.0], [64.5, 164.0], [64.6, 164.0], [64.7, 164.0], [64.8, 165.0], [64.9, 165.0], [65.0, 165.0], [65.1, 165.0], [65.2, 166.0], [65.3, 166.0], [65.4, 166.0], [65.5, 166.0], [65.6, 166.0], [65.7, 167.0], [65.8, 167.0], [65.9, 167.0], [66.0, 167.0], [66.1, 168.0], [66.2, 168.0], [66.3, 168.0], [66.4, 169.0], [66.5, 169.0], [66.6, 169.0], [66.7, 169.0], [66.8, 170.0], [66.9, 170.0], [67.0, 171.0], [67.1, 171.0], [67.2, 171.0], [67.3, 172.0], [67.4, 172.0], [67.5, 172.0], [67.6, 173.0], [67.7, 173.0], [67.8, 173.0], [67.9, 174.0], [68.0, 174.0], [68.1, 174.0], [68.2, 175.0], [68.3, 175.0], [68.4, 176.0], [68.5, 176.0], [68.6, 176.0], [68.7, 177.0], [68.8, 177.0], [68.9, 177.0], [69.0, 178.0], [69.1, 178.0], [69.2, 178.0], [69.3, 179.0], [69.4, 179.0], [69.5, 179.0], [69.6, 180.0], [69.7, 180.0], [69.8, 180.0], [69.9, 181.0], [70.0, 181.0], [70.1, 182.0], [70.2, 183.0], [70.3, 183.0], [70.4, 184.0], [70.5, 184.0], [70.6, 185.0], [70.7, 185.0], [70.8, 186.0], [70.9, 187.0], [71.0, 187.0], [71.1, 188.0], [71.2, 189.0], [71.3, 189.0], [71.4, 190.0], [71.5, 190.0], [71.6, 191.0], [71.7, 191.0], [71.8, 191.0], [71.9, 192.0], [72.0, 192.0], [72.1, 193.0], [72.2, 193.0], [72.3, 193.0], [72.4, 194.0], [72.5, 194.0], [72.6, 195.0], [72.7, 195.0], [72.8, 196.0], [72.9, 196.0], [73.0, 197.0], [73.1, 197.0], [73.2, 198.0], [73.3, 198.0], [73.4, 198.0], [73.5, 199.0], [73.6, 200.0], [73.7, 200.0], [73.8, 201.0], [73.9, 201.0], [74.0, 201.0], [74.1, 202.0], [74.2, 202.0], [74.3, 203.0], [74.4, 203.0], [74.5, 204.0], [74.6, 204.0], [74.7, 205.0], [74.8, 205.0], [74.9, 206.0], [75.0, 206.0], [75.1, 206.0], [75.2, 207.0], [75.3, 207.0], [75.4, 207.0], [75.5, 208.0], [75.6, 208.0], [75.7, 208.0], [75.8, 209.0], [75.9, 209.0], [76.0, 210.0], [76.1, 210.0], [76.2, 210.0], [76.3, 211.0], [76.4, 211.0], [76.5, 211.0], [76.6, 212.0], [76.7, 212.0], [76.8, 213.0], [76.9, 213.0], [77.0, 214.0], [77.1, 214.0], [77.2, 215.0], [77.3, 215.0], [77.4, 216.0], [77.5, 216.0], [77.6, 216.0], [77.7, 217.0], [77.8, 217.0], [77.9, 218.0], [78.0, 218.0], [78.1, 219.0], [78.2, 219.0], [78.3, 219.0], [78.4, 219.0], [78.5, 220.0], [78.6, 220.0], [78.7, 221.0], [78.8, 221.0], [78.9, 222.0], [79.0, 222.0], [79.1, 222.0], [79.2, 223.0], [79.3, 224.0], [79.4, 224.0], [79.5, 225.0], [79.6, 225.0], [79.7, 226.0], [79.8, 226.0], [79.9, 227.0], [80.0, 227.0], [80.1, 228.0], [80.2, 229.0], [80.3, 229.0], [80.4, 230.0], [80.5, 230.0], [80.6, 231.0], [80.7, 232.0], [80.8, 232.0], [80.9, 232.0], [81.0, 233.0], [81.1, 234.0], [81.2, 235.0], [81.3, 235.0], [81.4, 236.0], [81.5, 237.0], [81.6, 237.0], [81.7, 238.0], [81.8, 238.0], [81.9, 239.0], [82.0, 239.0], [82.1, 240.0], [82.2, 240.0], [82.3, 240.0], [82.4, 241.0], [82.5, 241.0], [82.6, 241.0], [82.7, 241.0], [82.8, 242.0], [82.9, 242.0], [83.0, 243.0], [83.1, 243.0], [83.2, 244.0], [83.3, 244.0], [83.4, 244.0], [83.5, 245.0], [83.6, 245.0], [83.7, 246.0], [83.8, 246.0], [83.9, 246.0], [84.0, 247.0], [84.1, 247.0], [84.2, 248.0], [84.3, 248.0], [84.4, 249.0], [84.5, 250.0], [84.6, 251.0], [84.7, 251.0], [84.8, 252.0], [84.9, 253.0], [85.0, 254.0], [85.1, 254.0], [85.2, 255.0], [85.3, 256.0], [85.4, 257.0], [85.5, 259.0], [85.6, 259.0], [85.7, 260.0], [85.8, 261.0], [85.9, 262.0], [86.0, 263.0], [86.1, 264.0], [86.2, 264.0], [86.3, 265.0], [86.4, 267.0], [86.5, 267.0], [86.6, 269.0], [86.7, 270.0], [86.8, 271.0], [86.9, 273.0], [87.0, 274.0], [87.1, 275.0], [87.2, 276.0], [87.3, 277.0], [87.4, 278.0], [87.5, 278.0], [87.6, 279.0], [87.7, 280.0], [87.8, 280.0], [87.9, 281.0], [88.0, 282.0], [88.1, 282.0], [88.2, 283.0], [88.3, 283.0], [88.4, 284.0], [88.5, 285.0], [88.6, 287.0], [88.7, 288.0], [88.8, 289.0], [88.9, 290.0], [89.0, 292.0], [89.1, 293.0], [89.2, 295.0], [89.3, 297.0], [89.4, 299.0], [89.5, 300.0], [89.6, 304.0], [89.7, 308.0], [89.8, 311.0], [89.9, 315.0], [90.0, 318.0], [90.1, 323.0], [90.2, 327.0], [90.3, 329.0], [90.4, 331.0], [90.5, 335.0], [90.6, 340.0], [90.7, 342.0], [90.8, 345.0], [90.9, 350.0], [91.0, 354.0], [91.1, 359.0], [91.2, 364.0], [91.3, 368.0], [91.4, 371.0], [91.5, 374.0], [91.6, 378.0], [91.7, 381.0], [91.8, 384.0], [91.9, 385.0], [92.0, 388.0], [92.1, 390.0], [92.2, 393.0], [92.3, 396.0], [92.4, 399.0], [92.5, 401.0], [92.6, 405.0], [92.7, 408.0], [92.8, 416.0], [92.9, 419.0], [93.0, 423.0], [93.1, 425.0], [93.2, 426.0], [93.3, 428.0], [93.4, 430.0], [93.5, 433.0], [93.6, 435.0], [93.7, 438.0], [93.8, 447.0], [93.9, 460.0], [94.0, 463.0], [94.1, 465.0], [94.2, 471.0], [94.3, 474.0], [94.4, 479.0], [94.5, 483.0], [94.6, 487.0], [94.7, 494.0], [94.8, 500.0], [94.9, 508.0], [95.0, 527.0], [95.1, 534.0], [95.2, 542.0], [95.3, 549.0], [95.4, 563.0], [95.5, 568.0], [95.6, 571.0], [95.7, 577.0], [95.8, 580.0], [95.9, 582.0], [96.0, 586.0], [96.1, 594.0], [96.2, 597.0], [96.3, 602.0], [96.4, 607.0], [96.5, 613.0], [96.6, 622.0], [96.7, 637.0], [96.8, 641.0], [96.9, 660.0], [97.0, 672.0], [97.1, 677.0], [97.2, 680.0], [97.3, 682.0], [97.4, 690.0], [97.5, 697.0], [97.6, 704.0], [97.7, 719.0], [97.8, 740.0], [97.9, 753.0], [98.0, 760.0], [98.1, 767.0], [98.2, 779.0], [98.3, 914.0], [98.4, 942.0], [98.5, 1062.0], [98.6, 1124.0], [98.7, 1146.0], [98.8, 1157.0], [98.9, 1165.0], [99.0, 1172.0], [99.1, 1177.0], [99.2, 1185.0], [99.3, 1190.0], [99.4, 1196.0], [99.5, 1201.0], [99.6, 1207.0], [99.7, 1212.0], [99.8, 1217.0], [99.9, 1248.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4289.0, "series": [{"data": [[0.0, 3696.0], [600.0, 139.0], [700.0, 75.0], [200.0, 1722.0], [800.0, 6.0], [900.0, 19.0], [1000.0, 8.0], [1100.0, 101.0], [300.0, 321.0], [1200.0, 57.0], [1400.0, 1.0], [100.0, 4289.0], [400.0, 257.0], [500.0, 159.0]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10841.0, "series": [{"data": [[0.0, 4.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 10841.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.54175115207326, "minX": 1.75730826E12, "maxY": 197.54175115207326, "series": [{"data": [[1.75730826E12, 197.54175115207326]], "isOverall": false, "label": "Seckill Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75730826E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 64.0, "minX": 16.0, "maxY": 457.2, "series": [{"data": [[16.0, 64.0], [17.0, 93.0], [18.0, 99.14285714285714], [19.0, 98.2], [21.0, 105.0], [22.0, 105.5], [23.0, 111.0], [26.0, 102.5], [33.0, 112.0], [35.0, 112.0], [34.0, 110.0], [38.0, 112.0], [41.0, 116.0], [40.0, 119.0], [45.0, 113.33333333333333], [49.0, 115.5], [51.0, 113.0], [50.0, 112.0], [52.0, 110.0], [71.0, 119.0], [70.0, 100.5], [75.0, 114.5], [73.0, 110.0], [77.0, 121.0], [83.0, 113.0], [86.0, 108.0], [85.0, 117.0], [84.0, 110.0], [91.0, 174.0], [93.0, 185.0], [99.0, 136.6], [98.0, 131.0], [97.0, 133.20000000000002], [103.0, 154.5], [102.0, 140.0], [100.0, 163.0], [107.0, 161.33333333333334], [104.0, 153.0], [111.0, 154.0], [110.0, 155.0], [114.0, 158.0], [119.0, 161.5], [118.0, 155.0], [117.0, 158.0], [116.0, 158.0], [120.0, 249.66666666666666], [121.0, 199.33333333333334], [122.0, 204.75], [123.0, 161.33333333333334], [125.0, 312.5], [127.0, 252.0], [126.0, 162.0], [124.0, 161.00000000000003], [128.0, 250.08333333333337], [129.0, 234.75], [130.0, 211.0], [131.0, 350.75], [132.0, 364.5], [133.0, 255.25], [134.0, 441.0], [135.0, 156.0], [137.0, 64.33333333333333], [138.0, 339.0], [139.0, 346.6], [140.0, 411.1666666666667], [141.0, 284.4545454545454], [142.0, 286.2857142857143], [143.0, 341.1190476190476], [150.0, 173.5], [149.0, 171.0], [148.0, 169.0], [146.0, 170.66666666666666], [144.0, 170.0], [156.0, 457.2], [157.0, 173.0], [155.0, 171.0], [153.0, 173.0], [162.0, 180.83333333333331], [163.0, 188.33333333333334], [165.0, 237.0], [166.0, 254.5], [161.0, 177.5], [160.0, 174.5], [168.0, 431.0], [173.0, 351.0], [175.0, 210.4], [174.0, 201.5], [171.0, 184.0], [170.0, 184.5], [169.0, 183.0], [176.0, 199.0], [177.0, 216.4], [178.0, 236.44444444444446], [179.0, 232.0], [183.0, 74.0], [182.0, 289.0], [181.0, 218.0], [180.0, 255.0], [184.0, 235.33333333333334], [185.0, 119.66666666666667], [188.0, 167.0], [189.0, 194.25], [190.0, 243.66666666666666], [191.0, 115.57142857142858], [187.0, 186.5], [193.0, 161.9090909090909], [195.0, 282.0], [196.0, 122.88888888888889], [197.0, 231.16666666666666], [198.0, 139.53846153846152], [199.0, 222.74999999999997], [194.0, 149.14285714285714], [192.0, 94.5], [200.0, 171.6024050024054]], "isOverall": false, "label": "POST Seckill Request", "isController": false}, {"data": [[197.54175115207326, 173.31400921659028]], "isOverall": false, "label": "POST Seckill Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 52124.73333333333, "minX": 1.75730826E12, "maxY": 80535.75, "series": [{"data": [[1.75730826E12, 52124.73333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75730826E12, 80535.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75730826E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 173.31400921659028, "minX": 1.75730826E12, "maxY": 173.31400921659028, "series": [{"data": [[1.75730826E12, 173.31400921659028]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75730826E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 171.4141013824895, "minX": 1.75730826E12, "maxY": 171.4141013824895, "series": [{"data": [[1.75730826E12, 171.4141013824895]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75730826E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.353087557603693, "minX": 1.75730826E12, "maxY": 3.353087557603693, "series": [{"data": [[1.75730826E12, 3.353087557603693]], "isOverall": false, "label": "POST Seckill Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75730826E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.75730826E12, "maxY": 683.0, "series": [{"data": [[1.75730826E12, 683.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75730826E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75730826E12, 683.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75730826E12, 683.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75730826E12, 513.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75730826E12, 683.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75730826E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 35.0, "minX": 176.0, "maxY": 1134.0, "series": [{"data": [[176.0, 531.0], [1437.0, 35.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1083.0, 172.0], [1119.0, 203.0], [2298.0, 87.0], [287.0, 124.0], [288.0, 1134.0], [677.0, 210.0], [176.0, 238.5], [1437.0, 129.0], [717.0, 149.0], [774.0, 210.0], [1994.0, 101.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2298.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 35.0, "minX": 176.0, "maxY": 1132.0, "series": [{"data": [[176.0, 531.0], [1437.0, 35.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1083.0, 172.0], [1119.0, 203.0], [2298.0, 87.0], [287.0, 124.0], [288.0, 1132.0], [677.0, 209.0], [176.0, 238.5], [1437.0, 126.0], [717.0, 148.0], [774.0, 210.0], [1994.0, 101.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2298.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 180.83333333333334, "minX": 1.75730826E12, "maxY": 180.83333333333334, "series": [{"data": [[1.75730826E12, 180.83333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75730826E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.75730826E12, "maxY": 180.66666666666666, "series": [{"data": [[1.75730826E12, 0.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75730826E12, 180.66666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.75730826E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75730826E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.75730826E12, "maxY": 180.68333333333334, "series": [{"data": [[1.75730826E12, 180.68333333333334]], "isOverall": false, "label": "POST Seckill Request-failure", "isController": false}, {"data": [[1.75730826E12, 0.15]], "isOverall": false, "label": "POST Seckill Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75730826E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.75730826E12, "maxY": 180.68333333333334, "series": [{"data": [[1.75730826E12, 0.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75730826E12, 180.68333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75730826E12, "title": "Total Transactions Per Second"}},
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

