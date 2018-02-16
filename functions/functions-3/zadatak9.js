function hide(str) {
    var result="";
    var partToinsert="...";
    var prefix="";
    var postfix="";

    for(var i=0;i<str.length;i++){
        var char=str[i];
        if(i<5){
            prefix+=char;
        }else if(i>=11){
            postfix+=char;
        }
    }
    return result=prefix+partToinsert+postfix;
}
var lala = hide("ipetrovic82@gmail.com")
console.log(lala);
