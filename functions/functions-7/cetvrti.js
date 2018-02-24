// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(celsius) {
    var fahrenheit=celsius*9/5+32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(-50));

function fahrenheitToCelsius(farenhait) {
    var celsius=(farenhait-32)*5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(-50));