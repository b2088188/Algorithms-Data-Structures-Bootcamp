// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	const A = generateCharMap(stringA);
	const B = generateCharMap(stringB);

	if (Object.values(A).length !== Object.values(B).length) return false;
	return Object.keys(A).every((el) => {
		return A[el] === B[el];
	});
}

function generateCharMap(str) {
	return [...str.replace(/[^\w]/g, '').toLowerCase()].reduce((acc, cur) => {
		if (!acc[cur]) {
			acc[cur] = 1;
		} else {
			acc[cur]++;
		}
		return acc;
	}, {});
}
module.exports = anagrams;
