
 

function sumOdd(a){
    var sum = 0;
    for(var i=0;i<a.length;i++){
        if(a[i]%2==1){
    sum+=a[i];
        }

    }
    return sum;
}
var result= sumOdd(a=[12,15,3,15,2,3]);
console.log(result);
