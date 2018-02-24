// Write a function that takes a number and returns array of its digits
function takeNum(num) {
    var newArrey=[];
    var str="";
    str+=num;
    for(var i=0;i<str.length;i++){
        
        newArrey[i]=parseInt(str[i]);
    } 
    return newArrey;
} 
console.log(takeNum(5879));
