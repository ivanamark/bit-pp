// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
function insertElement(array, element, position) {
    var newArray = [];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (i === position) {
            newArray[j] = element;
            newArray[j + 1] = array[i];
            j += 2;
        } else {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

var element = 78;
var position = 3;
var array = [2, -2, 33, 12, 5, 8];
var output = insertElement(array, element, position);

console.log(output);