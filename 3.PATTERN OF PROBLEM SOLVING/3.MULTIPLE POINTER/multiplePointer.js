/*Multiple Pointers==>
    We use pointers while dealing with arrays as array values are index based. The pointers basically refer to array indexes 
    and depending  on the situation we change the pointer values and run our code to check for something. 

AN EXAMPLE==>
    Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where 
    the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
    .sumZero([-3,-2,-1,0,1,2,3]) // (-3,3] 
    .sumZero([-2,0,1,3]) // undefined 
    .sumZero([1,2,3]) // undefined
    
pesudo code=>
    1=>firstly after understand the problem we create two pointer which one start 1st index of array and 2nd is start array.length
    2=>and after this we create a variable and store in sum of both left and right side pointer.
    3=>and then we cheq if the sum is equal to the zero,then return the both pointer value.
    4=>and cheq also what will happens if the sum is greater then zero....think about ...ok There is nothing to do, 
    just decrement the pointer on the right side.otherwise increment the left side pointer.
    5=>most important thing is that we provide a specific conditon for itreating array
    in which left side pointer never cross when left side pointer cross the right side pointer the loop will be terminate*/

function MultiplePointerSumOfZero(array) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    let sum = array[leftPointer] + array[rightPointer];
    if (sum == 0) {
      return [array[leftPointer], array[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}
console.log(MultiplePointerSumOfZero([-3, -2, -1, 0, 1, 2, 3]));

/*=====================Genral solution for solve this problem================================= */
// function sumOfZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return "not available";
// }
// console.log(sumOfZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumOfZero([-3, -2, -1, 0, 1, 2, 4]));
// console.log(sumOfZero([-3, -2, -1, 0, 4, 5, 6]));
