var broj = 15;
var _array = [1, 5, 15, 5, 6, 5];

function baba(_array) {
    var poj = 0;
    for (var i = 0; i < _array.length; i++) {
        if (_array[i] === broj) {
            poj = poj + 1;
        }
    }
    return poj;



}
var result = baba(_array);
console.log(result);


//Write a function that calculates a number of appearances of a given number in a given array.
