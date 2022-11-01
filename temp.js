// function binarySearch(array, num) {
//     let min = 0;
//     let max = array.length - 1;
//     while (min <= max) {
//         let mid = Math.floor((min + max) / 2);
//         if (array[mid] < num) {
//             min = mid + 1;
//         }
//         else if (array[mid] > num) {
//             max = mid - 1;
//         }
//         else {
//             return mid;
//         } 
//     }
//     return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

//========================recursion methods===================================//
// function binarySearch(array, min, max, num) {
//     let mid = Math.floor((min + max) / 2);
//     if (array[mid] == num) {
//         return mid;
//     }
//     if (array[mid] < num) {
//         return binarySearch(array, mid + 1, max, num)
//     }
//     else if (array[mid] > num) {
//         return binarySearch(array, min, mid - 1, num)
//     }

// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(array, 0, array.length - 1, 9));

//================================================================================
//bobble sort using recuersion..
// function bubble(arr) {
//     let temp = 0;
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble([6, 3, 0, 7, 6, 2, 6, 3]));

//================================================================================
// function bubbleSortUsingRecursion(array, i) {
//     if (i == 0) {
//         return array;
//     }
//     let temp;
//     for (let j = 0; j < i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//             temp = array[j + 1];
//             array[j + 1] = array[j];
//             array[j] = temp;
//         }
//     }
//     return bubbleSortUsingRecursion(array, i - 1);
// }
// const array = [6, 3, 0, 7, 6, 2, 6, 3];
// console.log(bubbleSortUsingRecursion(array, array.length));
//=================================================================================
// function divideConqure(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = divideConqure(arr.slice(0, mid));
//   let right = divideConqure(arr.slice(mid));
//   return MergeSort(left, right);

// }
// console.log(divideConqure([24, 10, 76, 73, 6]));
// console.log(divideConqure([24, 10, 76, 73]));

//````````````````````````````````````````````````````````````````````````````````````````````````````
//selection sort with dry run
function selectionSort(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j <= array.length - 1; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array

}//                        i                          min
console.log(selectionSort([6, 3, 8, 7, 7, 3, 4, 8, 6, 1]));// here i=0
//                          i,min                       
//                        [1, 3, 8, 7, 7, 3, 4, 8, 6, 6] here i=1                        
//                               i       min                     
//                        [1, 3, 8, 7, 7, 3, 4, 8, 6, 6] here i=2
//                                  i       min           
//                        [1, 3, 3, 7, 7, 8, 4, 8, 6, 6] here i=3
//                                     i          min         
//                        [1, 3, 3, 4, 7, 8, 7, 8, 6, 6] here i=4 
//                                        i          min          
//                        [1, 3, 3, 4, 6, 8, 7, 8, 7, 6] here i=5 
//                                         i,min        
//                        [1, 3, 3, 4, 6, 6, 7, 8, 7, 8] here i=6 
//                                              i min    
//                        [1, 3, 3, 4, 6, 6, 7, 8, 7, 8] here i=7 
//
//                        [1, 3, 3, 4, 6, 6, 7, 7, 8, 8] here i=8 


//                        [1, 1, 3, 3, 4, 6, 7, 7, 8, 8] here i=7 




