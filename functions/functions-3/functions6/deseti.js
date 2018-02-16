/*Write a function to find the element that occurs most frequently.*/
function findFrequentElement(input) {
    var mostFrequent = 1; //brojac se postavlja na nula
    var m = 0; //neutralni element za sabiranje je nula
    var item;
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            if (input[i] == input[j]) {
                m++;
            }
                if (mostFrequent < m) {
                    mostFrequent = m; //pronalazi najfrekventniji i smesta ga u item
                    item = input[i]
                }
            }
            m = 0;
        }

        return item;
    }

    var result = findFrequentElement(input = [4, 5, 5, 5, 4, 231]);
    console.log(result);