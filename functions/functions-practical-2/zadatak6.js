"use strict";
function convert(str) {
    var _array = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            _array[i] = null;
        } else {
            _array[i] = str[i];
        }

    }
    return _array;
}
var result = convert("ana voli milovana");
console.log(result);






