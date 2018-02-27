//write a program that concatenates two arrays
function twoArays(array1,array2) {
    var newArray=[];
    newArray=array1.concat(array2);
    return newArray;
    
}
console.log(twoArays([1,2,3,4,5],[10,20,30,40,50]));
