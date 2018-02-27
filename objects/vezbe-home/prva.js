//Povecaj poslednji element datog niza za jedan.
function incrementLastArrayElement(_array) {
    var newArray=[];
    newArray=_array.slice(0);//vraca znaci celu istu
    var lastNumber=newArray.pop();
    newArray.push(lastNumber+1);
    return newArray;
}
console.log(incrementLastArrayElement([0,0,7]));
