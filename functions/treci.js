"use strict";
function broj(a) {
    if (a % 1 < 1 && (a % 1 * 1000) >= 1) {
        return a;

    } else {
        console.log ("nije taj broj");
    }

}
 var rezultat=broj(0.123);
console.log(rezultat);