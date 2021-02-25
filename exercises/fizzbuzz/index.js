// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else console.log(i);
	}
}

// function fizzBuzz(n) {
// 	[...Array(n).keys()]
// 		.map((el) => el + 1)
// 		.forEach((el) => {
// 			if (el % 3 === 0 && el % 5 === 0) return console.log('fizzbuzz');
// 			if (el % 3 === 0) return console.log('fizz');
// 			if (el % 5 === 0) return console.log('buzz');
// 			console.log(el);
// 		});
// }

module.exports = fizzBuzz;
