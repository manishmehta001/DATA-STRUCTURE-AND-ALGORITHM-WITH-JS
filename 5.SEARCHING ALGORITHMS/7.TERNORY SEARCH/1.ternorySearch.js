function ternarySearch(arr, low, high, target) {
  if (low > high) return -1; // Base case: element not found

  // Find mid1 and mid2
  let mid1 = low + Math.floor((high - low) / 3);
  let mid2 = high - Math.floor((high - low) / 3);

  if (arr[mid1] === target) return mid1; // Found at mid1
  if (arr[mid2] === target) return mid2; // Found at mid2

  if (target < arr[mid1]) {
    // Search in the left part
    return ternarySearch(arr, low, mid1 - 1, target);
  } else if (target > arr[mid2]) {
    // Search in the right part
    return ternarySearch(arr, mid2 + 1, high, target);
  } else {
    // Search in the middle part
    return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
  }
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70];
const target = 40;
const result = ternarySearch(arr, 0, arr.length - 1, target);
console.log(
  result !== -1 ? `Target found at index ${result}` : "Target not found"
);

/*Dry Run Example
Array: [10, 20, 30, 40, 50, 60, 70], Target: 40

Step 1

low = 0, high = 6
mid1 = 0 + (6 - 0) / 3 = 2 → arr[mid1] = 30
mid2 = 6 - (6 - 0) / 3 = 4 → arr[mid2] = 50
40 lies between mid1 and mid2, so search in [30, 40, 50].
Step 2

low = 3, high = 3
mid1 = mid2 = 3, arr[3] = 40
Target found at index 3! ✅
Time Complexity Analysis

Best Case: 
    O(1) (if the element is found immediately)

Worst Case: O(log_3 n) (logarithmic complexity but with base 3 instead of 2)
Comparison with Binary Search:
    Binary search splits the array into 2 parts → O(log 2 n).
    Ternary search splits the array into 3 parts → O(log 3 n).
    Binary search generally performs better due to fewer comparisons.

Use Case
    Works best for sorted arrays.
    Used when the cost of comparisons is very high (e.g., disk-based searching).
    In most cases, binary search is preferred because it requires fewer comparisons.
    🚀 Ternary Search is an alternative to Binary Search but is less efficient in most cases! */
