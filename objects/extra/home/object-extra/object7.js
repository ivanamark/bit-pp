// Write a function that checks if a given string contains any digits
'use strict';
function isWithDigits(str) {
   for (var i = 0; i < str.length; i++) {
       var elem = str[i];
       var parsedChar = parseInt(elem);

       if (!isNaN(parsedChar) && typeof parsedChar === "number") {
           return true;
       }
   }
   return false;
}

var input = "H3llo";
var output = isWithDigits(input);

console.log(output);
