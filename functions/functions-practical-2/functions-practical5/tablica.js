//Write a program that prints a multiplication table for numbers up to 12.

function tablica(){
    var result;
    for (var i = 1; i < 13; i++) {
        for (var j = 1; j < 13; j++) {
           result=i*j;
            console.log(i*j);
        }
    }
     
        
    
    return result;
    }
    tablica();

