// ./src/utils/helpers.js

/**
 * Ensures the input is an array.
 *
 * @param {*} value - Value to validate.
 * @throws {TypeError} If the value is not an array.
 */
function assertArray(value) {
	if (!Array.isArray(value)) {
		throw new TypeError("Value must be an array");
	}
}

/**
 * Ensures that the index is a valid integer within array bounds.
 *
 * @param {Array<*>} arr - Target array.
 * @param {number} index - Index to validate.
 * @throws {TypeError} If index is not a finite integer.
 * @throws {RangeError} If index is out of bounds.
 */
function assertIndex(arr, index) {
	assertArray(arr);

	if (!Number.isInteger(index)) {
		throw new TypeError("Index must be an integer");
	}

	if (index < 0 || index >= arr.length) {
		throw new RangeError("Index out of bounds");
	}
}

/**
 * Ensures the comparator is a function.
 * @param {*} comparator - Comparator to validate.
 * @throws {TypeError} If comparator is not a function.
 */
function assertComparator(comparator) {
	if (typeof comparator !== "function") {
		throw new TypeError("Comparator must be a function");
	}
}
/**
 * Swaps two elements in an array (in place).
 *
 * @param {Array<*>} arr - Array to modify.
 * @param {number} index1 - First index.
 * @param {number} index2 - Second index.
 *
 * @example
 * const a = [1,2,3];
 * swapElements(a, 0, 2); // [3,2,1]
 */
function swapElements(arr, index1, index2) {
	assertArray(arr);
	assertIndex(arr, index1);
	assertIndex(arr, index2);

	if (index1 === index2) return;

	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

/**
 * Prints array elements in one line.
 *
 * @param {Array<*>} arr
 */
function printArrayInLine(arr) {
	assertArray(arr);
	console.log(arr.join(" "));
}

/**
 * Prints array elements line by line.
 *
 * @param {Array<*>} arr
 */
function printArrayLines(arr) {
	assertArray(arr);

	for (const item of arr) {
		console.log(item);
	}
}

export {
	assertArray,
	assertIndex,
	assertComparator,
	swapElements,
	printArrayInLine,
	printArrayLines,
};
