// Write a function that takes a string that finds out how many times a 
// character occurs. For example, the string "apple" would print the following:
// a - 1
// p - 2
// l - 1
// e - 1
// BONUS: Make sure that lower case letters and upper case letters count for 
// the same character. Also, ignore spaces and punctuation.


var lettercount = function(word){
	word = word.replace(/\s+/g, ''); //remove spaces
	var string = word.toLowerCase(); //convert to lowercase
	
	var count = 0;
	var myCount = {};

	for (var i=0; i < string.length; i++) {
		console.log('OUTER LOOP: ' + string[i])
		for(var v = 0; v < string.length; v++){
			console.log("inner loop: " + string[v])
			if (string[i] === string[v]) {
				count++;
				myCount[string[i]] = count;
			}
		}
		count = 0;
	}
	return(myCount);

}; 




// Sample words typed in that awful way early 2000s teens did 
// to test the lowercase counts

console.log(lettercount("of"));
// console.log( lettercount("ApPle"));
// console.log( lettercount("MiSS IssipPi"));
// console.log( lettercount("crAzy S3cuRe pas5w0rDs"));





// Anil's In class solution
// https://github.com/wdi-sf-july/js_functions_hw/blob/master/lettercount.js

// var word = "mississippi";

// var letterCount = function(letters) {

//   var result = {}

//   for(var i = 0; i < letters.length; i++) {
//   	var letter = letters[i];
//     if (result[letter] !== undefined) {
//       result[letter] += 1;
//     } else 
//       result[letter] = 1;
//     }

//   }

//   return result;
// }

// console.log(letterCount(word));








