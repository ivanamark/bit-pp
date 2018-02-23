function Product(name, price, expDate) {
    this.productId = (function () {
        var idNumber = Math.floor(100000 * Math.random()); /*Moze i ovako:Math.floor((89999*Math.random())+10000) */
        return idNumber;
    })();
    this.name = name;
    this.price = (function () {
        return parseFloat(price.toFixed(2));
    })();
    this.expDate = new Date(expDate);
    this.getInfo = function () {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(name.length - 1);
        var final = firstLetter + lastLetter;
        return final.toUpperCase() + this.productId + ", " + this.name + ", " + this.price;
    }
}
var voda = new Product("voda", 56, "22 apr 2019");
try {
    console.log(voda.getData());

} catch (err) {
    // console.log(err);
    
    throw new Error("invalid method");


} finally {
    console.log("ono sto se uvek izvrsava");

}
console.log();