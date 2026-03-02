// ./src/utils/array_funcs.js

import {
	assertArray,
	swapElements,
	printArrayInLine,
	printArrayLines,
} from "./helpers.js";

/**
 * Prints an array to the console with a frame.
 *
 * @param {Array<*>} arr - Array to print.
 * @param {boolean} [inLine=false] - Whether to print elements in one line.
 */
function printArray(arr, inLine = false) {
	assertArray(arr);

	const frame = "=".repeat(20);
	console.log(frame);

	if (inLine) {
		printArrayInLine(arr);
	} else {
		printArrayLines(arr);
	}

	console.log(frame);
}

/**
 * Reverses an array in place.
 *
 * @param {Array<*>} arr - Array to reverse.
 * @returns {Array<*>} The same reversed array.
 *
 * @example
 * const a = [1,2,3];
 * reverseArray(a); // [3,2,1]
 */
function reverseArray(arr) {
	assertArray(arr);

	const { length } = arr;
	const middle = Math.floor(length / 2);

	for (let i = 0; i < middle; i++) {
		swapElements(arr, i, length - 1 - i);
	}

	return arr;
}

/**
 * Performs a linear search.
 *
 * @param {Array<*>} arr - Array to search in.
 * @param {*} value - Value to find.
 * @returns {number} Index of the value or -1 if not found.
 *
 * @example
 * search([1,2,3], 2); // 1
 * search([1,2,3], 5); // -1
 */
function search(arr, value) {
	assertArray(arr);

	for (let i = 0, len = arr.length; i < len; i++) {
		if (arr[i] === value) {
			return i;
		}
	}

	return -1;
}

export { printArray, reverseArray, search };
