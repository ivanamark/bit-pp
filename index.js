var num = 75;

if (typeof num === "number") {
    if (num > 9 && num < 100) {
        var y = num % 10;
        var x = (num - y) / 10;
        var z = y * 10 + x;
        console.log(z);


    } else {
        console.log("error");

    }
}