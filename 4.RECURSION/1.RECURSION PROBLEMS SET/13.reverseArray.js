/*Write a programe to print reverse array using recursion */
function reverseArr(array, i, j, result) {
    result[j] = array[i];
    j++;
    if (i == 0) {
        return result;
    }
    return reverseArr(array, i - 1, j, result)
}
const array = [1, 2, 3, 4, 5]
console.log(reverseArr(array, array.length - 1, 0, []))