// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	let arr = [0, 1];
	let count = n - 1;
	while (count > 0) {
		const last = arr[arr.length - 1] + arr[arr.length - 2];
		arr = [...arr, last];
		count--;
	}
	return arr[arr.length - 1];
}

module.exports = fib;
