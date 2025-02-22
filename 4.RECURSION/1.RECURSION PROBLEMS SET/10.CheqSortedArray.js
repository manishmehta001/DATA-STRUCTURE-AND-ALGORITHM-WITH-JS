/* write a programe to check it is sorted or not array using recursion */

function findArrayIsSortedOrNot(array, i) {
    if (i == array.length - 1) {
        return true;
    }
    let newGreaterValue = array[i] < array[i + 1];
    if (!newGreaterValue) {
        return false;
    }
    return findArrayIsSortedOrNot(array, i + 1);

}
const array = [3, 4, 1, 5, 6];
const array1 = [1, 2, 3, 4, 8, 9];
console.log(findArrayIsSortedOrNot(array, 0));
console.log(findArrayIsSortedOrNot(array1, 0));