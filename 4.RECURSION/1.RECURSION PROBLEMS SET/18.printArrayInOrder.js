/*
Problem 2:
Write a recursive function to print an array in the following order. [0] [n-1] [1] [n-2] ......... ......... [(n-1)/2] [n/2]
Input:
5
1 5 7 8 9
Output:
1 9
5 8
7 7
*/

const printArrayInOrder = (
  arr,
  left = 0,
  right = arr.length - 1,
  result = []
) => {
  if (left > right) {
    return result.join("\n");
  }
  result.push(`${arr[left]} ${arr[right]}`);

  return printArrayInOrder(arr, left + 1, right - 1, result);
};
let array = [1, 5, 7, 8, 9];
console.log(printArrayInOrder(array));
