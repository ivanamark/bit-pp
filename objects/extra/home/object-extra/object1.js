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
 