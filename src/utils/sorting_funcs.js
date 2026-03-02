// ./src/utils/sorting_funcs.js

import { swapElements, assertArray, assertComparator } from "./helpers.js";

/**
 * Sorts an array in ascending order using bubble sort.
 *
 * Note: This function sorts the array in place.
 *
 * @param {Array<number>} arr - Array of numbers to sort.
 *
 * @example
 * const arr = [5, 2, 9];
 * bubbleSort(arr);
 * console.log(arr); // [2, 5, 9]
 */
function bubbleSort(arr) {
	assertArray(arr);

	const n = arr.length;
	if (n < 2) return;

	for (let i = 0; i < n - 1; i++) {
		let swapped = false;

		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swapElements(arr, j, j + 1);
				swapped = true;
			}
		}

		// array is already sorted, no need to continue
		if (!swapped) break;
	}
}

/**
 * Sorts an array using selection sort algorithm.
 *
 * Note: This function sorts the array in place.
 *
 * @param {Array<*>} arr - Array to sort.
 * @param {function} [comparator=(a, b) => a - b] - Optional comparison function.
 *   Should return negative if a < b, 0 if equal, positive if a > b.
 *
 * @example
 * const arr = [5, 2, 9];
 * selectionSort(arr);
 * console.log(arr); // [2, 5, 9]
 * @example
 * const arr = [5, 2, 9];
 * selectionSort(arr, (a, b) => b - a);
 * console.log(arr); // [9, 5, 2]
 */
function selectionSort(arr, comparator = (a, b) => a - b) {
	assertArray(arr);
	assertComparator(comparator);

	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < n; j++) {
			if (comparator(arr[j], arr[minIndex]) < 0) {
				minIndex = j;
			}
		}

		swapElements(arr, i, minIndex);
	}
}

export { bubbleSort, selectionSort };
