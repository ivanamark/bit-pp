// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
function calcSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element > 0) {
            sum += element;
        }
    }
    return sum;
}
console.log(calcSum([3, 11, -5, -3, 2]));
