// numSquare(max)

// Create a function called numSquare that will return an array of 
// all perfect square numbers up to, but not exceeding a max number.




var squares = [];

var numSquare = function(maxNum) {

	var maxSqR = Math.pow(maxNum, 0.5);

	for( i=1; i <= maxSqR; i++ ) {
		var squareNum = i * i;
		squares.push(squareNum);
	};

	return squares;
}

console.log( numSquare(4) );