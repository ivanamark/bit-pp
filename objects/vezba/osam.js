// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
function twoArrays(array1,array2) {
    var newArray=[];
    newArray=array1.concat(array2);
    return newArray;
}
console.log(twoArrays([4, 5, 6, 2],[3, 8, 11, 9]));
