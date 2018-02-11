function ivana(x,y) {
    var array=[];
    var counter=0;
    var comma = ',';
    for (var index = 0; index < x; index++) {
        var element =y+comma;
        array+=element;
        counter++;
        
    }
    return [array]
}
var result=ivana(6,null);
console.log(result);
