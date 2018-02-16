function perfect(num) {
    var count = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            count=count+ i;
        }
    }
    if (count === num && count !== 0) {
        console.log("is perfect");

    } else {
        console.log("it is not");

    }

}
var result = perfect(28);
console.log(result);