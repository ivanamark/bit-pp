function findLetter(str, letter) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        var currentLetter = str[i];
        if (currentLetter === letter) {
            counter++;
        }

    }
    return counter;


}
var result = findLetter("Tamo neki luka", "o");
console.log(typeof result);

