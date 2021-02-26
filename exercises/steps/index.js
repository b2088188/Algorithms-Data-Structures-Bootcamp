// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, count = 0, str = '') {
	if (count === n) return;
	if (str.length === n) {
		console.log(str);
		return steps(n, count + 1);
	}
	if (str.length <= count) {
		str += '#';
	} else {
		str += ' ';
	}
	return steps(n, count, str);
}

// function steps(n, count = 1, str = '') {
// 	if (count === n)
// 		return console.log(
// 			[...Array(count).keys()].map((el) => '#').join('') +
// 				[...Array(n - count).keys()].map((el) => ' ').join('')
// 		);
// 	console.log(
// 		[...Array(count).keys()].map((el) => '#').join('') +
// 			[...Array(n - count).keys()].map((el) => ' ').join('')
// 	);
// 	return steps(n, count + 1);
// }

module.exports = steps;
