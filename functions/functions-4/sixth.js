// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
function symmetria(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[array.length - 1 - i]) {
            result = "the array is symmetric";
        } else {
            result = "the arrey isn't symmetric";
        }
    }
    return result;
}
console.log(symmetria([2, 4, -2, 7, -2, 4, 2]));