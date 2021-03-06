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

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
