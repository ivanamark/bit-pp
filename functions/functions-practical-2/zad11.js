function convert(a) {
    var _array = [];
    var position = 0;
    for (var i = 0; i < a.length; i++) {
        var element = a[i];
        var number = parseFloat(element);
        if (!isNaN(number) && isFinite(number)) {
            _array[i - position] = number;
        } else {
            position++;
        }
    }
    return _array;
}
var result = convert(a = ["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);
