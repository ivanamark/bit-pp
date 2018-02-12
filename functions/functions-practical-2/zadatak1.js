"use strict";
function dali(input) {
    if (typeof input === "string") {
        return true;
    } else {
        return false;
    }

}
var result = dali(55);
console.log(result);
