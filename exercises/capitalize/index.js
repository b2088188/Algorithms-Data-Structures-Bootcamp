// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	return [...str]
		.map((el, i, arr) => {
			if (i === 0) return el.toUpperCase();
			if (arr[i - 1] === ' ') return el.toUpperCase();
			return el;
		})
		.join('');
}

module.exports = capitalize;
