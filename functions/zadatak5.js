function computeEmptySquare(size) {
  var squareOutput = " ";
  var asterix = "*";
  var blank = " ";
  var newLine = "\n";
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i === 0 || i === size - 1) {
        squareOutput += asterix;
      } else if (j === 0 || j === size - 1) {
        squareOutput += asterix;
      } else {
        squareOutput += blank;
      }
    }
    if (i !== size - 1) {
      squareOutput += newLine;
    }
  }
  return squareOutput;
}
var result = computeEmptySquare(5);
console.log(result);
