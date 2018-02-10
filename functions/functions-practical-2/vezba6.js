function laSt(str, n) {

    var lastIndex = str.length - 1;
    for (var i = lastIndex; i >= 0; i--) {
        var position = str[i];
        if (position === n) {
            return i + 1;
        }
    }
    return -1;
}
var result = laSt("ovo je neki string", "g");
console.log(result);
