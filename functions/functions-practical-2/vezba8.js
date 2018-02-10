function test_prime(num) {
    


if (num > 1 && num % 2 !== 0 && num / num == 1) {

    return "It is a prime number"

} else if (num == 2) {

    return "It is a prime number"

}

return "It is not a prime number"
    
    }


console.log(test_prime(8));