
var dimension = 5;
var edge = '*';
var inside = ' ';
var printLine;

for (var i = 1; i <= dimension; i++) {
    if (i === 1 || i === dimension) {
        printline = Array(dimension + 1).join(edge);
    } else {
        printline = edge + Array(dimension - 1).join(inside) + edge;
    }
    console.log(printline);
}
