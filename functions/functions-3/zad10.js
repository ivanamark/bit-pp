function findFrequentItem(inputArrey) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = i; j < inputArrey.length; j++) {
            if (inputArrey[i] == inputArrey[j]) {
                m++;
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArrey[i];

            }
        }
        m = 0;
    }
    return item;
}
var result = findFrequentItem(inputArray=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log(result);

