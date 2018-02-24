// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
var str = ' The quick brown fox';
var re = /fox/;


    var found = str.match(re);



console.log(found);