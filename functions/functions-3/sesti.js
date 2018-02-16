"strict mode";
function prefilled(x, y) {
    var array = [];
    var counter = 0;

    for (var index = 0; index < x; index++) {
        var element = y;
        array[counter] = element;
        counter++;

    }
    return array;
}
var result = prefilled(6, 0);
console.log(result);
