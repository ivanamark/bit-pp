/*Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/
function average(a) {
    var sum = 0;
    var rezult;
    for (var i = 0; i < a.length; i++) {
        var element = a[i];
        var broj = a.length;
        sum += element;

    }
    return rezult = sum / a.length;
}
var nesto = average([5, 6, 89, 45, 4, 78])
console.log(nesto);