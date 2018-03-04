// Write a list (array) of products you usually buy in the supermarket. 
//Write a price and name for each product.
// [
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

// Write a function that calculates the total price of your shopping list. 
'use strict';
function calculateTotalPrice(inputArray) {
   var sum = 0;

   for (var i = 0; i < inputArray.length; i++) {
       sum += inputArray[i].price;
   }

   return sum;
}

var shoppingList = [
   { name: 'apples', price: 100 },
   { name: 'juice', price: 80 },
   { name: 'bananas', price: 150 }
]

var output = calculateTotalPrice(shoppingList);
console.log(output);
