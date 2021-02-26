// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1 3 5 7 9
function pyramid(n) {
	const mid = Math.floor((n * 2 - 1) / 2);
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < n * 2 - 1; j++) {
			if (j >= mid - i && j <= mid + i) str += '#';
			else str += ' ';
		}
		console.log(str);
	}
}

module.exports = pyramid;
