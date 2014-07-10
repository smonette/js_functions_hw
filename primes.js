// primes(max)

// Using your isPrime() function, create a function <primes> that 
// will return an array of all prime numbers up to a certain amount.

var isPrime = function(num) {
 	if (Math.pow(num, 0.5)%1 === 0){
 		return true;
 	} else {
 		return false;
 	}
};

var primeNumbers = [];

var primes = function(max) {
	
	max = Math.pow(max, 0.5);

	for( i=1; i <= max; i++ ) {
		isPrime(i);
		if (true){
			var squareNum = i * i;
			primeNumbers.push(squareNum);
		} 
	};

	return primeNumbers;
}



console.log( primes(81) );
