function merge(array1, array2) {
    let result = [];
    while (array1.length || array2.length) {
        if (array1[0] <= array2[0]) {
            result.push(array1.shift());
        } else {
            result.push(array2.shift());
        }
    } return result;
}
const array1 = [1, 2, 3];
const array2 = [1, 5, 6, 7];
console.log(merge(array1, array2));
// function divideArr(array) {
//     if (array.length <= 1) {
//         return array;
//     }
//     let mid = Math.floor((array.length / 2));
//     let left = divideArr(array.slice(0, mid));
//     let right = divideArr(array.slice(mid));
//     return merge(left, right);

// }
// const array = [1, 5, 3, 7, 1, 2, 6];
// console.log((divideArr(array)));