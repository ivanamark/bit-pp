//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?



	
function primeFactors() {
	
	var num = 600851475143;
	for(var i=2;i<num;) {
		if (num % i === 0) {
			num = num / i;//deljiv samo sam sa sobom
		}
		i++;
	}
	
	return i;
}
var result=primeFactors()
console.log(result);
