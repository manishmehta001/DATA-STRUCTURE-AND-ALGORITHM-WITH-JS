function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n)); // Jump size
  let prev = 0;

  // Jump ahead until we find a block that may contain the target
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));

    if (prev >= n) return -1; // Target not found
  }

  // Do a linear search within the identified block
  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i; // Target found
    }
  }

  return -1; // Target not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 70;
const result = jumpSearch(arr, target);
console.log(
  result !== -1 ? `Target found at index ${result}` : "Target not found"
);

/*
Explanation (Step-by-Step)
Determine the Jump Size:
    The jump step is √n. For an array of length 9, the step is 3.

Jump in Blocks:
    Check elements at indexes 2, 5, and 8 (i.e., 30, 60, 90).
    Stop jumping when arr[index] is greater than or equal to the target.

Perform Linear Search in the Block:
    The target (70) is less than 90, so we perform a linear search from index 5 to 8.
    Find 70 at index 6.

Time Complexity Analysis
Best Case: 𝑂(-/𝑛)  (when the target is found early). 
Worst Case: 𝑂(-/𝑛)  (when the target is at the end or missing).
This approach works well for sorted arrays where binary search isn't suitable. 🚀
*/
