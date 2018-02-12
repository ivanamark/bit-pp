"use strict";
function reverse(num) {
    num = num + "";
    var output = "";
    var lastIndex = num.length - 1;
    for (var i = 0; i < num.length; i++) {
        var element = num[lastIndex - i];
        output += element;

    }
    var reverseNum = parseFloat(output);
    return reverseNum;

}
var result = reverse(98765);
console.log(typeof result);
console.log(result);


