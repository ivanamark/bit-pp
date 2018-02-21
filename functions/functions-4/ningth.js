// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
function deleting(areey, e) {
    var index = 0;
    var newArray = [];
    for (var i = 0; i < areey.length; i++) {
        var element = areey[i];
        if (element === e) {
            delete areey[i];
            element = areey[i]; //moramo opet da mu dodelimo elemente clanova niza jer bi inace gledao samo one iz if
        }
        if (!!element) { //ako je uslov true
            newArray[index] = element;
            index++;
        }
    }
    return newArray;
}
console.log(deleting([4, 6, 2, 8, 2, 2], 2));