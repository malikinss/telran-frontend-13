// ./src/homework.js

import { printArray } from "./utils/array_funcs.js";
import { selectionSort } from "./utils/sorting_funcs.js";

/**
 * Demonstrates array sorting and shuffling.
 */
function main() {
	const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];

	console.log("Original array:");
	printArray(arr, true);

	ascendingSort(arr);
	descendingSort(arr);
	shuffleArray(arr);
}

function ascendingSort(arr) {
	selectionSort(arr);
	console.log("Sorted ascending:");
	printArray(arr, true);
}

function descendingSort(arr) {
	selectionSort(arr, (a, b) => b - a);
	console.log("Sorted descending:");
	printArray(arr, true);
}

function shuffleArray(arr) {
	selectionSort(arr, () => Math.random() - 0.5);
	console.log("Shuffled array:");
	printArray(arr, true);
}

main();
