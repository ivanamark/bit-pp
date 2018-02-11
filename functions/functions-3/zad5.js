/*var lastOne=[7,9,0,-2];
var n=2;

var lastelem=lastOne[lastOne.length-n];
console.log(lastelem);*/
function theLastOne(array,n) {
    var rez=[];
    var last_element=array[array.length-1];
    counter=0;
    for (var i=last_element;i>=array.length-n;i--){
         rez=array[i];
         counter ++;
    }
        
    
    return rez;
}
var result=theLastOne(array=[7,9,0,-2],2);
console.log(result);

