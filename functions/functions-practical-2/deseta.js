function addd(str, n) {
    var something = "";
    var toPut = "...";
    for (var i = 0; i < str.length; i++) {
        var chara = str[i];
        something += chara;
        if (i === (n - 1)) {
            something += toPut;
            break;
        }
    }
    return something;

}
var result = addd("Da li znas to", 3);
console.log(result);
