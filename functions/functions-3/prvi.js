function string(str1, str2, indexToInsert) {
    var conc = "";
    var prefix = "";
    var postfix = "";
    for (var index = 0; index < str2.length; index++) {
        var char = str2[index];
        if (index < indexToInsert) {
           prefix += char;
        } else if (index >= indexToInsert) {
            postfix += char;
        }
    }
    // for(var j=0;j<indexToInsert;j++){
    //     prefix=prefix+1;

    // }
    // for(var k=indexToInsert;k<str2.length;k++){
    //     postfix=postfix+1;
    // }

    return conc =  prefix + str1 + postfix;
}
var result = string("JS", "My random string", 4);
console.log(result);

// My random string
// var prefix = My ra
// var postfix = ndom string

// conc =  prefix + str1 + postfix