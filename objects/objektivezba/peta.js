a = "abc";
b = 4;
function comodo(a, b) {
    var res="";
    for (var i = 0; i < a.length; i++) {
        res+=a;       
        /*zbrajas a i stavljas u novi string n puta*/
        
    }
    
    return res;
}
result = comodo("abc",4);
console.log(result);
