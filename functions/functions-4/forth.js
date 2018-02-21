// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]


function findSec(array) {
    
    for(var i=0;i<array.length;i++){
        var element=array[i];
        if(element>array[i-1]){
        
        console.log(i);
        
        
        }
    }
    return i;
    
}
console.log(findSec([4, 2, 2,5, -1, 6]));