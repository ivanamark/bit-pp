// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
function findMin(array) {
    
    for(var i=0;i<array.length;i++){
        var element=array[i];
        if(element<array[i+1]){
        console.log(element);
        console.log(i);
        
        
        }
    }
    return element;
    
}
console.log(findMin([4, 2, 2, -1, 6]));