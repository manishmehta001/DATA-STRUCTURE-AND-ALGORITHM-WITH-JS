/*Given an array nums and an integer target, return the index of the target if it exists in the array.
 Otherwise, return -1.
 
Example 1:
Input: nums = [1, 3, 5, 7, 9], target = 5  
Output: 2

Example 2:
Input: nums = [2, 4, 6, 8], target = 10  
Output: -1   */

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([1, 3, 5, 7, 9], 5));
console.log(linearSearch([2, 4, 6, 8], 10));
``;
