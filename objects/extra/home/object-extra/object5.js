// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days
function calcDays(input) {
    

    var birthday = new Date(input);
    var date1 = birthday.getDate();
    var date=new Date();
    var date2=date.getDate();
return date1-date2;
}
console.log(calcDays('March 31'));

