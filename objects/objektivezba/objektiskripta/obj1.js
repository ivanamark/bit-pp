// 
var author = {
    name: "George R.R. Martin",
    quotes: [
        "Sleep is good but books are better."
    ]
 };
 
 var book = {
    title: "A Game Of Thrones",
    author: author
 };
 
 console.log(book.author.name);//outputs:George R.R. Martin
 var book = {
    title: "A Game Of Thrones",
    author: author
 };
 
 var author = {
    name: "George R.R. Martin",
    quotes: [
        "Sleep is good but books are better."
    ]
 };
 
 console.log(book.author.name);//outputs:George R.R. Martin
 
 var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    age: function () {
        2017 - author.yearOfBirth;
    }
 };
 
 var yearsOld = author.age;
 
 console.log(yearsOld);
 console.log(yearsOld());//function;age  undefined
 var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    quotes: [
        "Sleep is good but books are better."
    ],
    age: function () {
 return 2017 - author.yearOfBirth;
    }
 };
 
 var quote = author.quotes[0];
 console.log(quote);
  
 var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    quotes: [
        "Sleep is good but books are better."
    ]
 };
 
 author.country = "US";
 author.gender = "male";
 
 console.log(author.gender);//dodajemo objektu nove propertije
 var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function () {
        console.log("Writing....");
    })()
 };
 
//  author.write;
//  var author = {
//     name: "George R.R. Martin",
//     yearOfBirth: 1948,
//     write: (function () {
//         return function () {
//             console.log("Writing....");
//         }
//     })()
//  };
 
//  author.write;
//  var author = {
//     name: "George R.R. Martin",
//     gender: "male",
//     country: "US",
//     quotes: [
//         "Sleep is good but books are better."
//     ]
//  };
 
//  delete quotes[0];
//  delete country;
 
//  console.log(author);//return undefined,can not delete quotes;
 
 var author = {
    name: "George R.R. Martin",
    gender: "male",
    country: "US",
    quotes: ["Sleep is good but books are better."]
 };
 
 delete author.quotes[0];
 delete author.country;
 
 console.log(author.country);
 console.log(author.quotes);
 