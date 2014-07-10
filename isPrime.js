// isPrime(num)
// Create a function to return true or false if a number passed in a prime number.

var isPrime = function(num) {
 	if (Math.pow(num, 0.5)%1 === 0){
 		return true
 	} else {
 		return false;
 	}
}

console.log( isPrime(105) ); //false
console.log( isPrime(81) ); //true
console.log( isPrime(25) ); //true
console.log( isPrime(5) ); //false