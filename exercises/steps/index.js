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

function steps(n) {
	let i = 1;
	while (i <= n) {
		console.log(generateSymbol(i, '#') + generateSymbol(n - i, ' '));
		i++;
	}
}

function generateSymbol(num, symbol) {
	return [...Array(num).keys()].map((el) => symbol).join('');
}

module.exports = steps;
