/*
2.Same Digits Frequency ==>
Given two non-negative integers, `num1` and `num2`, write a function `hasSameDigitsFrequency(num1, num2)` that checks if both numbers have the same frequency of digits.

Example:-
- `hasSameDigitsFrequency(182, 281)` ➞ `true`
- `hasSameDigitsFrequency(34, 14)` ➞ `false`
- `hasSameDigitsFrequency(3589578, 5879385)` ➞ `true`

 Constraints:-
- The integers can be very large (up to 10^9).
- The function should handle numbers efficiently.

*/

const hasSameDigitsFrequency = (num1, num2) => {
  // Convert numbers to strings to easily iterate through digits
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // Check if lengths are different
  if (strNum1.length !== strNum2.length) {
    return false;
  }

  // Initialize frequency counters
  const countNum1 = {};
  const countNum2 = {};

  // Count frequencies of digits in num1
  for (let digit of strNum1) {
    countNum1[digit] = (countNum1[digit] || 0) + 1;
  }

  // Count frequencies of digits in num2
  for (let digit of strNum2) {
    countNum2[digit] = (countNum2[digit] || 0) + 1;
  }

  // Compare the frequency objects
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      return false;
    }
  }

  return true;
};

// Example usages:
console.log(hasSameDigitsFrequency(182, 281)); // true
console.log(hasSameDigitsFrequency(34, 14)); // false
console.log(hasSameDigitsFrequency(3589578, 5879385)); // true

/*

Suppose we're iterating over the number 182 and the first digit is '1':

Initial State:

countNum1 = {} (empty object)
digit = '1'
Execution of the Line:

countNum1[digit] is undefined because '1' is not yet in countNum1.
(countNum1[digit] || 0) becomes (undefined || 0), which evaluates to 0.
0 + 1 results in 1.
So, countNum1['1'] = 1.
Next Iteration with Digit '8':

countNum1 = { '1': 1 }
digit = '8'
countNum1['8'] is undefined, so (countNum1['8'] || 0) is 0.
0 + 1 results in 1.
So, countNum1['8'] = 1.
Next Iteration with Digit '2':

countNum1 = { '1': 1, '8': 1 }
digit = '2'
countNum1['2'] is undefined, so (countNum1['2'] || 0) is 0.
0 + 1 results in 1.
So, countNum1['2'] = 1.
At the end, countNum1 will be { '1': 1, '8': 1, '2': 1 }, which correctly reflects the frequency of each digit in the number 182.

Summary:
The line countNum1[digit] = (countNum1[digit] || 0) + 1; is a concise way to either initialize a count or increment an existing count of digits in the countNum1 object.


========================================================================================================================================
Example Walkthrough:
Let’s say we are comparing the numbers 182 and 281.

1. Frequency Count Setup:
From previous steps, you would have already built up the following frequency count objects:

countNum1 = { '1': 1, '8': 1, '2': 1 }
countNum2 = { '2': 1, '8': 1, '1': 1 }

Here, both countNum1 and countNum2 have the same keys ('1', '8', '2') and each key has a frequency of 1.
2. Iteration Over countNum1:
The for...in loop iterates over each key in countNum1. We’ll go step by step through each key.
Iteration 1: Key '1'
Step 1: The current key is '1'.
Step 2: The code checks countNum1['1'] against countNum2['1'].
countNum1['1'] = 1
countNum2['1'] = 1
Step 3: Since both values are equal, the loop continues to the next key.
Iteration 2: Key '8'
Step 1: The current key is '8'.
Step 2: The code checks countNum1['8'] against countNum2['8'].
countNum1['8'] = 1
countNum2['8'] = 1
Step 3: Since both values are equal, the loop continues to the next key.
Iteration 3: Key '2'
Step 1: The current key is '2'.
Step 2: The code checks countNum1['2'] against countNum2['2'].
countNum1['2'] = 1
countNum2['2'] = 1
Step 3: Since both values are equal, the loop completes.
Conclusion:
The loop has now checked all keys in countNum1 and found that every key in countNum1 has the same value (frequency) as the corresponding key in countNum2.
Since no mismatches were found, the code does not return false within the loop.
Therefore, the function will eventually return true after this loop, indicating that both numbers have the same digit frequency.
Summary:
The for...in loop iterates over each key (digit) in countNum1.
It compares the frequency of each digit in countNum1 with the frequency of the same digit in countNum2.
If any digit has a different frequency in countNum2, the function immediately returns false.
If all digits have the same frequency in both objects, the function does not find any mismatches and will return true after the loop completes.
This loop ensures that the two numbers have exactly the same digits with the same frequency.

*/
