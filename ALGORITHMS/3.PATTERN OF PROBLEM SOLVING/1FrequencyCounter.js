/*FREQUENCY COUNTERS ==>
• This pattern uses objects or sets to collect values/frequencies of values
• This can often avoid the need for nested loops or O(N^2) operations with arrays / strings    
• Frequency counter pattern in JS is basically a set of steps which is developed to avoid nested loop solution to avoid 
  O(n) = n^2; This pattern basically says create objects to store array values and then for each value create a counter 
  which will then be the key value pair. Then create another object to store the resultant values and their frequency. 
  Compare the objects and frequency and determine the final result.


EXAMPLE
Write a function called same, which accepts two arrays. The function should return true if every value in the array 
has it's corresponding value squared in the second array. The frequency of values must be the same.
-same ([1,2,3], [4,1,9]) // true	
-same ([1,2,3], [1,9]) // false
-same ([1,2,1], [4,4,1]) // false (must be same frequency)       */
/*=====================================================================================================================*/
// function frequenciesCounter(array1, array2){
//     if(array1.length !==array2.length){
//         return false;
//     }
//      var count = 0;
//     for(let i= 0; i<=array1.length-1; i++){
//         let store =array1[i]**2;
//         for(let j= 0; j<=array2.length-1; j++){
//             if(store==array2[j]){
//                 count++;
//                 break;
//             }
//         }
//     }
//     if(count == array2.length){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const array1 = [1,2,3];
// const array2 = [4,1,9];
// console.log(frequenciesCounter(array1,array2));

/* 2nd methods using one loop========================================================================================================== */
// function frequenciesCounter(array1, array2){
//     if(array1.length !==array2.length){
//         return false;
//     }
//     for(let i=0;i<=array1.length-1;i++){
//         let correctindex= array2.indexOf(array1[i]**2);
//         if(correctindex==-1){
//             return false;
//         }
//         array2.splice(correctindex,1);
//     }
//     return true;
// }    
// const array1 = [1,2,3];
// const array2 = [4,1,9];
// console.log(frequenciesCounter(array1,array2));

/*3rd methods using math.squrt==============================================================*/
function same1(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == Math.sqrt(arr2[j])) {
        count++;
        arr2.splice(j, 1);
      }
    }
  }
  if (count == arr1.length) {
    return true;
  } else return false;
}
const array1 = [1, 2, 3, 3];
const array2 = [4, 1, 9, 5];
console.log(same1(array1, array2));
