/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/
function _array(ARRAY) {
    var newIndex=0;
    var rezult=[];
    for (var i = 0; i < ARRAY.length; i++) {
        var arrElement=ARRAY[i];
        if(typeof arrElement==="number"){
            rezult=arrElement;
        }
        
    }
    return Math.max(...ARRAY);
}
var maximum=_array([3,8,7,9,89,100]);
console.log(maximum);
