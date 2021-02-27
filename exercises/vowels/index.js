// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// match will return an array of all the matches that were found.
	// if no match found, it'll return null.
	// g make sure we don't stop when matching the first character.
	// i stands for insensitive.
	const matches = str.match(/[aeiou]/gi);
	return matches?.length || 0;
}

module.exports = vowels;
