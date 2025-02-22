/*
Problem 3:
Write a recursive program to remove all odd integers from an array. You must not use any extra array or print anything in the function. Just read input, call the recursive function, then print the array in main().
Input:
1 54 88 6 55 7
Output:
54 88 6
*/

// const removeOdds = (arr, i = 0, result = []) => {
//   if (i === arr.length - 1) {
//     return;
//   }

//   if (arr[i] % 2 === 0) {
//     result.push(arr[i]);
//   }

//   removeOdds(arr, i + 1, result);
// };
// const array = [1, 54, 88, 6, 55, 7];
// console.log(removeOdds(array).join(""));
const removeOdds = (arr, i = 0) => {
  if (i >= arr.length) return []; // Base case: return an empty array when end is reached

  const rest = removeOdds(arr, i + 1); // Recursive call for next elements

  return arr[i] % 2 === 0 ? [arr[i], ...rest] : rest; // Include even numbers
};

const array = [1, 54, 88, 6, 55, 7];
console.log(removeOdds(array).join(" ")); // Print result properly
