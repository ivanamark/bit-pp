// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
function positivElement(array) {
    var result = [];
    var counter=0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element > 0) {
         var   element2 = element * 2;
         result[i]=element2;
          
        }else{
            result[i]=element;
        }
    }
    return result ;
}
console.log(positivElement([-3, 11, 5, 3.4, -8]));
