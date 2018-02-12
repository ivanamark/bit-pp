"use strict";
function write(a, times) {
    var res = "";
    for (var i = 0; i < times; i++) {
        res += a;
    }
    return res;
}
var result = write("gdsfa", 3);
console.log(result);


/* Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa"*/
    