function todo(str,n) {
    var rez="";
    var toPut=str.substring(n,str.length-1);
    var toPut="...";
    var firstPart=str.substring(0,n-1);
    rez=firstPart+toPut;
    
    return rez;
}
console.log(todo("lalalalala",5));