
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both
//  forward and backward,
//  ignoring punctuation, case, and spacing.
function palindrome(str) {
    return str.toLowerCase() ===str.toLowerCase().split('').reverse().join('');
    
}

console.log(palindrome("eye"));




