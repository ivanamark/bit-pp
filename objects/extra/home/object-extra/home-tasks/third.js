//Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
var str = "the quick brown fox";
mach = "fox";
var counter = 0;
var result = "";
var elem = str.split(" ");
console.log(elem);

function countE(elem, mach) {


    for (var i = 0; i < elem.length; i++) {
        if (elem[i] === mach) {
            counter++;

        }
    }
    return counter;
}
console.log(countE(elem, mach));
console.log(result = mach + ' was found ' + counter + ' times.');