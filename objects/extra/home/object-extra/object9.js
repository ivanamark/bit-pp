// Write a function that checks if a given number
// belongs to the interval from 1900 to 2018. 
'use strict';
function isInInterval(num) {
   return num >= 1900 && num <= 2018;
}

var input = 1995;
var output = isInInterval(input);

console.log(output);