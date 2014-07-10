// sillySum(arr)

// Write a function that takes an array of numbers, and 
// returns the sum of each number multiplied by its index.
// count += (number * index)


var seriousNumbers = [1, 2, 3, 4];

var sillySum = function(sillyNumber){
	var count = 0;
	for(i = 0; i < sillyNumber.length; i++){
		count += (sillyNumber[i] * i)
	};	
	return count;
};

console.log( sillySum(seriousNumbers) );