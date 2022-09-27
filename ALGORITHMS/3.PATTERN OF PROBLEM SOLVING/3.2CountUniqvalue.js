/*count Unique Values ==>(using multiple pointer methods) ==>

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
countUniqueValues ([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7     */
function countUniqueValues(array) {
    var count = 0;
    for (let i = 0; i <= array.length - 2; i++) {
        for (let j = i + 1; j <= array.length - 1; j++) {
            if (array[i] == array[j]) {
                break;
            }
            else if (array[i] !== array[j]) {
                count++;
                break;
            }
        }
    }
    return count + 1;
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

/*================================2nd methods pagal code ======================================================== */
function countUniqueValues1(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            continue;
        }
    }
    return i + 1;
}
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 11, 14, 14]));
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 6, 9, 0, 10]));