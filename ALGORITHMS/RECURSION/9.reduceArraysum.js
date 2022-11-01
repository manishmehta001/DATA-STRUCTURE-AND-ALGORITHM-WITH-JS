/*Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then,
 at each level nuless than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level.
Example:
Input: A = {1, 2, 3, 4, 5}
Output: [48]
      [20, 28]
    [8, 12, 16]
   [3, 5, 7, 9]
 [1, 2, 3, 4, 5]   */

function reduceArrayOfSum(array) {
    //base case..
    if (array.length == 1) {
        console.log(array);
        return;
    }
    let reduceArr = [];
    for (let i = 0; i <= array.length - 2; i++) {
        reduceArr[i] = array[i] + array[i + 1];
    }
    reduceArrayOfSum(reduceArr);
    console.log(array);
}
const array = [1, 2, 3, 4, 5];
reduceArrayOfSum(array);

