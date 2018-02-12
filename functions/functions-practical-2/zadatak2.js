
"use strict";
function something(myString) {
    if (myString.length === 0) {
        myString = true;
    } else {
        myString = false;

    }
    return myString;
}
var result = something("");
console.log(result);
