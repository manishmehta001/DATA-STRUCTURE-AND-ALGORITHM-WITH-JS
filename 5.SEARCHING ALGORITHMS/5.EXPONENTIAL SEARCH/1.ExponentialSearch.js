function binarySearch(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

function exponentialSearch(arr, target) {
  let n = arr.length;
  if (arr[0] === target) return 0; // If the first element is the target

  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2; // Exponentially increase i
  }

  // Perform binary search in the identified range
  return binarySearch(arr, i / 2, Math.min(i, n - 1), target);
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 40;
const result = exponentialSearch(arr, target);
console.log(
  result !== -1 ? `Target found at index ${result}` : "Target not found"
);

/*
Explanation (Step-by-Step)
Find a Range Using Exponential Growth

Start with i = 1, then i = 2, 4, 8, ... until arr[i] is greater than or equal to the target.
Example:
i = 1 → arr[1] = 20
i = 2 → arr[2] = 30
i = 4 → arr[4] = 50 (greater than 40).
Perform Binary Search in the Found Range

We now apply binary search between indices 2 and 4 (since arr[4] > 40).
Find 40 at index 3.

Time Complexity Analysis
Best Case: 
    O(1) (if the target is the first element).

Worst Case: 
    O(logn) (due to the combination of exponential growth and binary search).

Use Case:
Best for searching in unbounded or very large sorted datasets where the size isn't known beforehand (e.g., searching in infinite streams or large databases). 🚀
*/
