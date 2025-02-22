function interpolationSearch(arr, target) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Estimate the position of the target
    let pos =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

    if (arr[pos] === target) {
      return pos; // Target found
    }

    if (arr[pos] < target) {
      low = pos + 1; // Search in the right subarray
    } else {
      high = pos - 1; // Search in the left subarray
    }
  }
  return -1; // Target not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60];
const target = 40;
const result = interpolationSearch(arr, target);
console.log(
  result !== -1 ? `Target found at index ${result}` : "Target not found"
);

/*
Explanation (Step-by-Step)
Calculate Estimated Position:

Use the formula: pos = low+(high−low /arr[high]−arr[low]) × (target−arr[low])

For arr = [10, 20, 30, 40, 50, 60] and target = 40:
pos = 0+(5−0/60−10) × (40−10)
    = 0+(5/50)×30=3

So, we check index 3.
Compare with Target:

arr[3] = 40 → Target Found!
If Not Found, Adjust the Range:

If arr[pos] < target, search on the right.
If arr[pos] > target, search on the left.

Time Complexity Analysis
Best Case: 
O(loglogn) (when data is uniformly distributed).
Worst Case: 
O(n) (when elements are not uniformly distributed, like an exponentially increasing array).
This method works best when data is evenly spread (e.g., salaries, sorted temperatures, etc.). 🚀
*/
