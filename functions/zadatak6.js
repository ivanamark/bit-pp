
"use strict";
var y = "";

function draw(x) {
    for (var i = 0; i < x; i++) {
       y=y+"*";
    }
    return y;

    
 
    
}

var result = draw(5);
console.log(result);


//Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.
