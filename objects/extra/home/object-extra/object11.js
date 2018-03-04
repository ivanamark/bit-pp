// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 
// Write a function which expects a number and a callback generator function and 
//returns an array of numbers produced by the generator function.
function generate(x,y){
   var result= Math.floor((Math.random()*y) +x ); 
    return result;
}
console.log (generate(5,20));
console.log (generate(50,100));