// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			let tmp;
			if (arr[j] > arr[j + 1]) {
				tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		let tmp;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) minIndex = j;
		}
		if (i !== minIndex) {
			tmp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = tmp;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	let midpoint = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, midpoint)), mergeSort(arr.slice(midpoint)));
}

function merge(left, right) {
	let results = [];
	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
