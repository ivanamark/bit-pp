// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
// function descendingArrey(array) {
   
    


var numbers = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
numbers.sort(function(a, b) {
  return b-a;
});
console.log(numbers);

