function fibonacciSearch(arr, target) {
  let n = arr.length;

  // Initialize Fibonacci numbers
  let fib2 = 0; // (F(k-2))
  let fib1 = 1; // (F(k-1))
  let fib = fib2 + fib1; // (F(k))

  // Find the smallest Fibonacci number greater than or equal to n
  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
  }

  // Marks the eliminated range from the front
  let offset = -1;

  // While there are elements to inspect
  while (fib > 1) {
    // Check valid index (if offset + fib2 is within range)
    let i = Math.min(offset + fib2, n - 1);

    if (arr[i] < target) {
      // Move search range to the right
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > target) {
      // Move search range to the left
      fib = fib2;
      fib1 -= fib2;
      fib2 = fib - fib1;
    } else {
      // Found the target
      return i;
    }
  }

  // If the last element matches the target
  if (fib1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1; // Target not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50];
const target = 40;
const result = fibonacciSearch(arr, target);
console.log(
  result !== -1 ? `Target found at index ${result}` : "Target not found"
);

/*Step-by-Step Explanation
Generate Fibonacci Numbers
    Compute Fibonacci numbers F(k-2), F(k-1), and F(k) until F(k) ≥ n (size of the array).
    Example:
    F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5 (≥ array size 5).

Use Fibonacci Numbers to Divide the Search Space
    Start with offset = -1.
    Compare arr[fib2] (middle element based on Fibonacci sequence) with the target.
    If the target is greater, search in the right part.
    If the target is smaller, search in the left part.
    Adjust Fibonacci numbers accordingly.

Locate the Target Element
    When fib1 = 1, check the last remaining element.

Dry Run Example
    Array: [10, 20, 30, 40, 50], Target: 40

Compute Fibonacci numbers:
    F(5) = 5, F(4) = 3, F(3) = 2.

Start at index = 3 (fib2 = 3):
    arr[3] = 40, which is target → Found at index 3. ✅

Time Complexity Analysis
Best Case: 
    O(1) (if the target is found immediately).
Worst Case: 
    O(logn) (similar to binary search but using Fibonacci indices).

Use Case:
    Works best for sorted arrays where Fibonacci sequence indexing can be useful.
    Used in optimized searching where division into Fibonacci-sized chunks is preferred over binary halving.
    🚀 Fibonacci Search is an alternative to Binary Search that can be useful in hardware-based memory optimizations! */
