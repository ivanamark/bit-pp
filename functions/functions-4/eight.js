// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]



function concatArrays(firstArray, secondArray) {
    var concatenatedArray = [];
 
    for (var i = 0; i < firstArray.length; i++) {
        concatenatedArray[i] = firstArray[i];
        for (var j = 0; j < secondArray.length; j++) {
            concatenatedArray[firstArray.length + j] = secondArray[j];
        }
    }
    return concatenatedArray;
 }
 
 var firstArray = [4, 5, 6, 2];
 var secondArray = [3, 8, 11, 9];
 var concated = concatArrays(firstArray, secondArray);
 
 console.log(concated);
 