/*
 Find the Odd Occurrence
Given an array of integers, where all elements appear an even number of times except for one element, write a function findOddOccurrence(arr) that returns the element that appears an odd number of times.

Example:
findOddOccurrence([1, 2, 3, 2, 3, 1, 3]) ➞ 3
findOddOccurrence([10, 10, 20, 30, 30, 20, 20]) ➞ 20
findOddOccurrence([4, 4, 4, 4, 4, 4, 4]) ➞ 4

Constraints:
The array will contain only integers, and the length may vary.
The function should handle arrays of up to length 10,000 efficiently.
These problems are great for practicing the frequency counter pattern and will help you develop your skills in solving DSA problems using this technique.

*/

function findOddOccurrence(arr) {
  const frequency = {};

  // Count the frequency of each element
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Find the element with an odd frequency
  for (let key in frequency) {
    if (frequency[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}

// Example usages:
console.log(findOddOccurrence([1, 2, 3, 2, 3, 1, 3])); // 3
console.log(findOddOccurrence([10, 10, 20, 30, 30, 20, 20])); // 20
console.log(findOddOccurrence([4, 4, 4, 4, 4, 4, 4])); // 4

// function findOddOccurrence(arr) {
//     let result = 0;

//     // XOR all elements in the array
//     for (let num of arr) {
//       result ^= num; // XOR current result with the current number
//     }

//     return result; // The result will be the odd occurring element
//   }

//   // Example usages:
//   console.log(findOddOccurrence([1, 2, 3, 2, 3, 1, 3])); // 3
//   console.log(findOddOccurrence([10, 10, 20, 30, 30, 20, 20])); // 20
//   console.log(findOddOccurrence([4, 4, 4, 4, 4, 4, 4])); // 4
