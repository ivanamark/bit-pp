function crte(a, b, c) {
    var res = " ";
    var newLine = "\n";
    var asterix = "*";
    for (var i = 0; i < a; i++) {
        res += asterix;



    }
    res += newLine;
    for (var j = 0; j < b; j++) {
        res += asterix;



    }
    res += newLine;
    for (var k = 0; k < c; k++) {
        res += asterix;



    }
    return res;
}
var result = crte(5, 6, 7);
console.log(result);
