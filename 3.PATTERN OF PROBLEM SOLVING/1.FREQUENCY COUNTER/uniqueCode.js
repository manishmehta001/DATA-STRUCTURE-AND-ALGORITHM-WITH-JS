/*

Unique Occurrences==?
Given an array of integers, write a function hasUniqueOccurrences(arr) that checks if the number of occurrences of each value in the array is unique.

Example:
hasUniqueOccurrences([1, 2, 2, 1, 1, 3]) ➞ true
hasUniqueOccurrences([1, 2]) ➞ false
hasUniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) ➞ true

Constraints:
The array will contain only integers, and the length may vary.
The function should handle arrays of up to length 10,000 efficiently.

 */

function hasUniqueOccurrences(arr) {
  // Step 1: Create a frequency counter
  const frequencyCounter = {};

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  // Step 2: Create a set to track unique frequencies
  const frequencies = new Set();

  for (let key in frequencyCounter) {
    let freq = frequencyCounter[key];
    if (frequencies.has(freq)) {
      return false; // Frequency is not unique
    }
    frequencies.add(freq);
  }

  return true; // All frequencies are unique
}

// Test cases
console.log(hasUniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(hasUniqueOccurrences([1, 2])); // false
console.log(hasUniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true

/*
Example:
Input: hasUniqueOccurrences([1, 2, 2, 1, 1, 3])

Step 1: Counting the Frequency
We start by counting how many times each number appears in the array. We use a frequency counter (in this case, an object called frequencyCounter).

Iteration 1:
Current number: 1
frequencyCounter becomes: {1: 1}
Iteration 2:
Current number: 2
frequencyCounter becomes: {1: 1, 2: 1}
Iteration 3:
Current number: 2 (again)
frequencyCounter becomes: {1: 1, 2: 2}
Iteration 4:
Current number: 1 (again)
frequencyCounter becomes: {1: 2, 2: 2}
Iteration 5:
Current number: 1 (again)
frequencyCounter becomes: {1: 3, 2: 2}
Iteration 6:
Current number: 3
frequencyCounter becomes: {1: 3, 2: 2, 3: 1}
At the end of this step, the frequencyCounter looks like this:

javascript
Copy code
{
  1: 3,  // 1 appears 3 times
  2: 2,  // 2 appears 2 times
  3: 1   // 3 appears 1 time
}
Step 2: Checking for Unique Frequencies
Next, we check if these frequency counts are unique using a Set. The idea is that a Set only stores unique values. If we try to add a duplicate value, the set will reject it.

Iteration 1:
Frequency of 1 is 3.
frequencies set becomes: {3}
Iteration 2:
Frequency of 2 is 2.
frequencies set becomes: {3, 2}
Iteration 3:
Frequency of 3 is 1.
frequencies set becomes: {3, 2, 1}
After adding all the frequencies, the set contains {3, 2, 1}, which means all frequencies are unique.

Step 3: Return the Result
Since all the frequency counts are unique, the function returns true.

Summary of the Example:
The number 1 appears 3 times.
The number 2 appears 2 times.
The number 3 appears 1 time.
The frequencies (3, 2, and 1) are all unique, so the output is true.

Additional Example:
Let's consider a different input:

Input: hasUniqueOccurrences([1, 2])

Step 1: Counting the Frequency
frequencyCounter becomes: {1: 1, 2: 1}
Step 2: Checking for Unique Frequencies
frequencies set becomes: {1} after adding the frequency 1 of both 1 and 2.
Since both numbers have the same frequency (1), the set only contains one element {1}. This means the frequencies are not unique, so the function returns false.

This walkthrough shows how the function works to determine if the occurrences of each number in the array are unique.

*/
