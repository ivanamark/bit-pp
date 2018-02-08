function fiNd(str, n) {
    var position;
    for (var i = 0; i < str.length; i++) {
        
        if (str[i] === n) {
            position = i + 1;
            return position;
        }
    }

    return -1;
}

result = fiNd("ivana", "m");
console.log(result);
