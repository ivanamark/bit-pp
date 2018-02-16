/*var lastOne=[7,9,0,-2];
var n=2;

var lastelem=lastOne[lastOne.length-n];
console.log(lastelem);*/
function theLastOne(array, n) {
    var rez = [];
    var last_element = array.length - 1;
    var counter = 0;
    for (var i = last_element; i > last_element - n; i--) {
        rez[counter] = array[i];
        counter++;
    }


    return rez;
}
var result = theLastOne([7, 9, 0, -2], 2);
console.log(result);

