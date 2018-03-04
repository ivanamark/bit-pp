function drawChessBoard(size) {
    var result = " ";
    var asterix = "#";
    var lineBreak = "\n";
    var blank = " ";
    for (var k = 1; k < size / 2; k++) {
        for (var i = 1; i < size; i++) {

            if (i % 2 === 0) {
                result += asterix;
            } else {
                result += blank;
            }
        }
        result += lineBreak;
        for (var j = 1; j < size; j++) {
            if

            (j % 2 !== 0) {
                result += asterix;
            } else {
                result += blank;
            }
        }
        result += lineBreak;


    }
    k++;

    return result;
}
console.log(drawChessBoard(9));