//write a program that deletes a given element e=2,a=[4,2,6,8,6,8,2,2,2]

var e=2;
var a=[4,2,6,8,6,8,2,2,2];

function value(e){
    return e!==2;
}
var filtered=a.filter(value);
console.log(filtered);
