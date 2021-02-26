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
function pyramid(n, i = 0, str = '') {
	if (i === n) return;
	if (str.length === n * 2 - 1) {
		console.log(str);
		return pyramid(n, i + 1);
	}
	const mid = Math.floor((n * 2 - 1) / 2);
	let add;
	if (str.length >= mid - i && str.length <= mid + i) {
		add = '#';
	} else {
		add = ' ';
	}
	return pyramid(n, i, str + add);
}

module.exports = pyramid;
