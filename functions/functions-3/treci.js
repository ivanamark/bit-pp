function falsy(a) {
    var rez = [];
    var newIndex =0;

    for (var i = 0; i < a.length; i++) {
        var arrElement = a[i];

        if (!!arrElement) {
            rez[newIndex] = arrElement;
            newIndex++;
        }


    }


    return rez;

}
var result = falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);

console.log(result);





