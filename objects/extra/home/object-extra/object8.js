// Write a function that checks if a given string is a valid hexadecimal color.
'use strict';
function isHex(string) {

   if (string.indexOf("#") === 0) {
       string = string.slice(1);
   }

   if (string.length !== 6 && string.length !== 3) {
       return false;
   }

   for (var i = 0; i < string.length; i++) {
       var hexDigit = string.charAt(i);
       var decimalHexDigit = parseInt(hexDigit, 16);

       if (isNaN(decimalHexDigit)) {
           return false;
       }
   }

   return true;
}

var input = "#f9f9f9";
var output = isHex(input);

console.log(output);