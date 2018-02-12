"use strict";
function conCate(str, y) {
    var res = "";
    for (var i = 0; i < y; i++) {
        
        res += str;
    }
    return res;
}
var result = conCate("hahahahaha", 2);
console.log(result);
/*Write a function that concatenates a given string given number of times. For example, 
if “abc” and 4 are given values, the function prints out abcabcabcabc. */
