//Write a program that takes a string and prints its characters out in reversed order in the console.
//Input:  Belgrade Institute of Technology
//Output: ygolonhceT fo etutitsnI edargleB
function takeString(str) {
    var res = "";
    var result='';
    var char=str[i];
    for (var i = str.length - 1; i > -1; i--) {
        result += char;

        if (char==='') {
            result += res;
        }

    }
    return result
}
console.log(takeString("Belgrade Institute of Technology"));