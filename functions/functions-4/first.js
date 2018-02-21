// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no
//***************ONE WAY
// function doesElementExist(array, elementToMatch) {
//     if (array.length < 1 || !elementToMatch) {
//         return false;
//     }
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         if (elementToMatch === element) {
//             return true;
//         }
//     }
//     return false;
//  }

//  var element = 3;
//  var array = [5, -4.2, 3, 7];
//  var isMatch = doesElementExist(array, element);
//  console.log(isMatch ? "yes" : "no");
function check(a, e) {
    for (var i = 0; i < a.length; i++) {
        if (e === a[i]) {
            console.log("yes");

        } else {
            console.log("no");

        }
    }
    return e;

}


console.log( check([5, -4.2, 3, 7],3));
