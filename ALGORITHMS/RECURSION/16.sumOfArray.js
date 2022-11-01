/*Given an array of integers, find sum of array elements using recursion. 
input = [5,3,2,3,7]
output = 20 */
function sumOfArray(array, i, sum) {
    if (i == array.length) {
        return sum;
    }
    sum = sum + array[i];
    return sumOfArray(array, i + 1, sum);
}
const array = [5, 3, 2, 3, 7]
console.log(sumOfArray(array, 0, 0))