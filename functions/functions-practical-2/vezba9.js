function replace(str) {
    var newStr = " ";
    var separator = "_";
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element === " ") {
            newStr += separator;
        } else {
            newStr += element;
        }
    }
    return newStr;
}
var result = replace("My random string");
console.log(result);
