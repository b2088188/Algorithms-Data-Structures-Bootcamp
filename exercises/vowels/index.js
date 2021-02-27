// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let arr = [...str];
	let vowelArr = ['a', 'e', 'i', 'o', 'u'];
	return arr.reduce((acc, cur) => {
		if (vowelArr.includes(cur) || vowelArr.includes(cur.toLowerCase())) return ++acc;
		return acc;
	}, 0);
}

module.exports = vowels;
