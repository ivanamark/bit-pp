"use strict";
function _array(a) {
    var res = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "A") {
            res = res + 1;
        }


    }

    return res;


}
var result = _array("adsdddaaA");
console.log(result);
