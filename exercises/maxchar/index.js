// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let arr = [...str];
	const result = arr.reduce((acc, cur) => {
		if (!acc[cur]) acc[cur] = 1;
		else {
			acc[cur]++;
		}
		return acc;
	}, {});
	const [most, ...rest] = Object.keys(result).sort((a, b) => result[b] - result[a]);
	return most;
}

module.exports = maxChar;
