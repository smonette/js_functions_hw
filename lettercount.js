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

		for(var v = 0; v < string.length; v++){
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

console.log( lettercount("ApPle"));
console.log( lettercount("MiSS IssipPi"));
console.log( lettercount("crAzy S3cuRe pas5w0rDs"));








// var word = "sassafrass"
// var myObj = {};
// var count = 0;


// for (var i=0; i<word.length; i++) {

// for(var v=0; v<word.length; v++){
// if (word[i] === word[v]) {
// count++;
// myObj[word[i]] = count;
// }
// }
// count = 0;
// }
// console.log(myObj);








// var myWord = 'apple';
// var indexes = 'abcdefghijklmnopqrstuvwxyz'
// var myArray = [];

// var letterCount = function(word) {
//   for (var i = 0; i < word.length; i += 1) {
//     for (var j = 0; j < indexes.length; j += 1) {
//       var counter = 0;
//       if (myWord[i] === indexes[j]) {
//         counter += 1;
//         myArray.push(myWord[i] + ' - ' + counter);
//       }
//     }
//   }
//   console.log(myArray);
// }

// letterCount(myWord);