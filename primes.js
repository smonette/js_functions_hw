// primes(max)

// Using your isPrime() function, create a function <primes> that 
// will return an array of all prime numbers up to a certain amount.

var primeNumbers = [];

var primes = function(max) {

	var maxNum = Math.pow(max,0.5);

	for( i=1; i <= maxNum; i++ ) {
		var squareNum = i * i;
		primeNumbers.push(squareNum);
	};

	return primeNumbers;
}



console.log( primes(81) );
