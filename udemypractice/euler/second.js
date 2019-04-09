//Each new term in the Fibonacci sequence is generated
// by adding the previous two terms. By starting with 1 and 2,
// the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci 
//sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

var arr = [1, 2];
var sum = 0;
for (var i = arr.length - 1; i < 4e+6; i++) {
    var element = arr[arr.length - 1] + arr[arr.length - 2]
    if (element < 4e+6) {
        arr.push(element);
    }

}


console.log(arr);
arr.forEach(function (n) {
    if (n % 2 === 0) {
        sum += n;
    }
});
console.log(sum);