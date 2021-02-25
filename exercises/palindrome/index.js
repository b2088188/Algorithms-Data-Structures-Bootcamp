// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	let arr = [...str];
	const first = arr[0];
	const last = arr[arr.length - 1];
	if (arr.length === 2) return first === last;
	if (arr.length === 1) return true;
	return first === last ? palindrome(arr.slice(1, arr.length - 1).join('')) : false;
}

module.exports = palindrome;
