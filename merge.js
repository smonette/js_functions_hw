// ##merge(arr1, arr2)

// Write a function called ```merge```.  The function should take two sorted 
// arrays of numbers as input and return a merged array of the sorted numbers 
// from the input.  For example, if the input arrays were `var arr1 = [3,6,11]; 
// var arr2 = [2,4,5,8,9];`  Then the returned array would be: `[2,3,4,5,6,8,9,11]`.

var myFirstArray = [3,6,11];
var mySecondArray = [2,4,5,8,9];


var merge = function(arr1, arr2){
	var indexOne = 0;
	var indexTwo = 0;
	var arr1Len = arr1.length;
	var arr2Len = arr2.length;
	var output = [];

	while((indexOne < arr1Len)&&(indexTwo < arr2Len)){
		if(arr1[indexOne] < arr2[indexTwo]){
			output.push(arr1[indexOne]);
			indexOne++;
		} else {
			output.push(arr2[indexTwo]);
			indexTwo++;
		}
	}

	if (indexOne < arr1Len){
		for(indexOne; indexOne < arr1Len; indexOne++) {
			output.push(arr1[indexOne]);
		};
	}
	else if (indexTwo < arr2Len) {
		for(indexTwo; indexTwo < arr2Len; indexTwo++) {
			output.push(arr2[indexTwo]);
		};
	}
	else { }

	return output; 
};

console.log("The final output is: " + merge(myFirstArray, mySecondArray) );





// Anil's In class solution
// https://github.com/wdi-sf-july/js_functions_hw/blob/master/merge.js

// var list1 = [3,6,11];
// var list2 = [2,4,5,8,9];
// // [2,3,4,5,6,8,9,11]

// var merge = function(arr1, arr2) {
//   var result = [];

//   while (arr1.length && arr2.length ) {

//     if (arr1[0] <= arr2[0]) {
//       result.push(arr1.shift());
//     }else {
//       result.push(arr2.shift());
//     }
//   }
//   return result.concat(arr1).concat(arr2);
// }

// console.log(merge(list1, list2));


