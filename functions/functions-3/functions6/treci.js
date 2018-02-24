// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
// function rotates(arr1,k){
//     var newArrey=[];
  
//     for(var i=k;i<arr1.length;i++){
//         var element=arr1[i];
       
    
        
//         for(var j=0;j<k;j++){
//             var element1=arr1[j];
 
//             newArrey=[element,element1];
//     }
// } 
    

// return newArrey;

// //treba da se popravi
// }
// console.log(rotates([1,2,3,4,5,6],2));
function replaceKelements(arr, k) {
    //var arr = [1, 2, 3, 4, 5, 6];
    //var k = 2;
    var newArr = [];
    for (var i = k; i < arr.length; i++) {
        newArr[i - k] = arr[i];
    }
    var l = newArr.length;
    for (var i = l; i < (l + k); i++) {
        newArr[i] = arr[i - l];
    }
    return newArr;
}

var result = replaceKelements([1,2,3,4,5,6],2);
console.log(result);