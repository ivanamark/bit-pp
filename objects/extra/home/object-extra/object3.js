
// Write a function that calculates the average product price of your shopping list.
//  Print this value with the precision of three decimals. 


'use strict';
function calculateAveragePrice(inputArray) {
   var sum = 0;

   for (var i = 0; i < inputArray.length; i++) {
    var obj = inputArray[i];
    sum += obj.price;
}

var averagePrice = sum / inputArray.length;
return averagePrice.toFixed(3);
}

var shoppingList = [
{ name: 'apples', price: 99 },
{ name: 'juice', price: 83 },
{ name: 'bananas', price: 150 }
]

console.log(calculateAveragePrice(shoppingList));
