"use strict";
function fiNd(str, n) {
    var position;
    for (var i = 0; i < str.length; i++) {
        
        if (str[i] === n) {
            position = i + 1;
            return position;
        }
    }

    return -1;
}

<<<<<<< HEAD
result = fiNd("ivana", "a");
=======
var result = fiNd("ivana", "m");
>>>>>>> functions-3
console.log(result);
