// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
function twistArrays(firstArray, secondArray) {
    var combinedArray = [];
    var arraysLength = firstArray.length + secondArray.length;
 
    for (var i = 0, j = 0; j < arraysLength; i++) {
        if (i < firstArray.length) {
            combinedArray[j++] = firstArray[i];
        }
 
        if (i < secondArray.length) {
            combinedArray[j++] = secondArray[i];
        }
    }
 
    return combinedArray;
 }
 
 var firstArray = [4, 5, 6, 2];
 var secondArray = [3, 8, 11, 9];
 var twistedArray = twistArrays(firstArray, secondArray);
 
 console.log(twistedArray);
 