function retirement(yearOfBirth, gender) {
    var answer = "";
    var ThisYear = 2018;
    var youNeed;
    if (gender == "male" && yearOfBirth > 64) {
        answer = console.log("You are already retired");

    } else if (gender == "male" && yearOfBirth < 65) {
        youNeed = 65 - (ThisYear - yearOfBirth)
        answer = console.log("You need " + youNeed + " years");

    } else if (gender == "woman" && yearOfBirth < 60) {
        youNeed = 60 - (ThisYear - yearOfBirth)
        answer = console.log(youNeed + " years left");

    } else if (gender == "woman" && yearOfBirth > 59) {
        console.log("You are already in retirement");

    } else {
        console.log("I don't understand you");

    }
    return answer;
}
var result = retirement(1953, "male");
console.log(result);
