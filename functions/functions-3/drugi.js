"use strict";
function prefilled(a) {
    var rez ="";
   
    for (var i = 0; i < a.length; i++) {
        var char = a[i];
       
        
        if( char !== undefined && char !== null && char !== false && char !== 0 && char !== "" && !isNaN(char)){   
            rez+= char; 
        }
    
         

    }


    return rez;

}
var result = prefilled( [NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);
console.log(typeof result);
