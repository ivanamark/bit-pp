var Array1 = ["A", "B", "C", "D"];
var Array2 = [1, 2, 3, 4];

var Array3 = [];
for (var i = 0; i < Array1.length; i++) {
  Array3.push(Array1[i], Array2[i]);
}
console.log(Array3);
