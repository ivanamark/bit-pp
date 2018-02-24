// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

"use strict";

function tellFortune(childnum, partname, geoloc, jobtitle) {
    return "You wil be a " + jobtitle + " in " + geoloc + " and married to " + partname + " with " + childnum + " kids."
}
console.log(tellFortune(2, "Milos", "Smederevo", "programmer"));