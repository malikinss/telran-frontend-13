# Homework 13 – Selection Sort with Comparator

## Task Definition

The goal of Homework 13 is to implement the **Selection Sort** algorithm in JavaScript with support for a **custom comparator function**.

Specifically, the task requires:

1. Implementing `selectionSort(arr, comparator)`:
    - Sorts the array **in place**
    - Accepts a comparator function to define ordering
    - Defaults to ascending order `(a, b) => a - b`
2. Demonstrating the sort:
    - Ascending
    - Descending
    - Random (shuffle)
3. Validating inputs:
    - `arr` must be an array
    - `comparator` must be a function

Built-in methods like `.sort()` are **not allowed**.

---

## 📝 Description

This project implements a **selection sort utility** in JavaScript with modular helpers:

- **`selectionSort`** – sorts arrays manually using the selection sort algorithm.
- **`bubbleSort`** – already implemented for comparison.
- **Helpers**:
    - Array validation
    - Index validation
    - Comparator validation
    - Element swapping
    - Array printing

Project structure:

`````

./src/
├─ homework.js                 # Demonstration / main entry
├─ utils/
│   ├─ array_funcs.js          # Array utilities (print, reverse, search)
│   ├─ sorting_funcs.js        # bubbleSort and selectionSort
│   └─ helpers.js              # Validation and helper functions
└─ index.html                   # HTML entry point for browser demo

````id="1t0x07"

---

## 🎯 Purpose

The homework focuses on:

1. **Algorithm implementation** – understanding selection sort mechanics.
2. **Comparator functions** – controlling ordering logic dynamically.
3. **In-place sorting** – modifying arrays efficiently.
4. **Input validation** – making the code robust against invalid inputs.
5. **Nested loops practice** – strengthening algorithmic thinking.

---

## 🔍 How It Works

### 1️⃣ Selection Sort Algorithm

- Divides the array into **sorted** and **unsorted** parts.
- Finds the **minimum element** in the unsorted part.
- Swaps it with the first unsorted element.
- Repeats until the array is fully sorted.

Time complexity: O(n²)

### 2️⃣ Comparator Function

- Defines the ordering of elements.
- Should return:
  - `< 0` → `a` comes before `b`
  - `> 0` → `b` comes before `a`
  - `0` → no change

Examples:

```js
// Ascending (default)
selectionSort(arr);

// Descending
selectionSort(arr, (a, b) => b - a);

// Shuffle
selectionSort(arr, () => Math.random() - 0.5);
`````

### 3️⃣ Input Validation

- Throws `TypeError` if `arr` is not an array.
- Throws `TypeError` if `comparator` is not a function.
- Swaps are optimized to skip if `minIndex === i`.

---

## 📜 Output Example

```js
const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];

selectionSort(arr); // Ascending
console.log(arr);
// [0, 1, 1, 2, 2, 2, 4, 5, 9, 9]

selectionSort(arr, (a, b) => b - a); // Descending
console.log(arr);
// [9, 9, 5, 4, 2, 2, 2, 1, 1, 0]

selectionSort(arr, () => Math.random() - 0.5); // Shuffle
console.log(arr);
// Random order
```

---

## 📦 Usage

1️⃣ Include `homework.js` as a module in HTML:

```html
<script
	type="module"
	src="./homework.js"
></script>
```

2️⃣ Import utilities in another module:

```js
import { selectionSort } from "./utils/sorting_funcs.js";
import { printArray } from "./utils/array_funcs.js";

const arr = [5, 2, 9];

selectionSort(arr); // Ascending
printArray(arr, true);

selectionSort(arr, (a, b) => b - a); // Descending
printArray(arr, true);
```

---

## ✅ Dependencies

- Modern browser or Node.js with **ESM support**.
- No external libraries required.

---

## 📊 Project Status

**Status:** ✅ Completed

- Selection sort implemented with comparator support.
- Supports ascending, descending, and custom/random order.
- Input validation included.
- Works in-place with optimized swaps.
- Demonstration script shows all scenarios.

---

## 📄 License

MIT License

---

## 🧮 Conclusion

This project demonstrates **advanced array sorting in JavaScript**:

- Manual selection sort algorithm.
- Flexible ordering using comparator functions.
- Robust validation and safe element swapping.
- Clean, modular, reusable ESM architecture.

---

Made with ❤️ and `JavaScript` by **Sam-Shepsl Malikin** 🎓
