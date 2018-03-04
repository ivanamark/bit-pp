// Write a function that prints out the name of the most
//  expensive product on your shopping list. Write it in uppercase. 
'use strict';
function mostExpensiveProduct(inputArray) {
   var mostExpensive = inputArray[0];

   for (var i = 0; i < inputArray.length; i++) {
       if (inputArray[i].price > mostExpensive.price) {
           mostExpensive = inputArray[i];
       }
   }

   return mostExpensive.name.toUpperCase();
}

var shoppingList = [
   { name: 'apples', price: 100 },
   { name: 'juice', price: 80 },
   { name: 'bananas', price: 150 }
]

console.log(mostExpensiveProduct(shoppingList));