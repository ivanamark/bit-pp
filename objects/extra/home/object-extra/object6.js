// Write a function that checks if a given string is written in all capitals.

'use strict';
function isAllCapitals(str) {
   return str === str.toUpperCase();
}

var input = "HALLO";
var output = isAllCapitals(input);

console.log(output);
