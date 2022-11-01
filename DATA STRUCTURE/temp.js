// function sumOfinner(num){
//   var str =num.toString();
//   var sum =0
//   for(let i=1; i<=str.length-2; i++){
//     sum += Number(str[i]);
//   }
//   return sum;
// }
// console.log(sumOfinner(2124));

// const arr =[1,2,3,4];
// console.log(arr);
// console.log(...arr);
// console.log(arr "|");

// function linearSearch(arr,n){
//   for(let i=0; i<=arr.length-1; i++){
//     if(arr[i]==n){
//       return i;
//     }
//   }
//   return false;

// }
// console.log(linearSearch([1,2,4,5,6,7],5));
// console.log(linearSearch([1,2,4,5,6,7],8));
// function linearSearch(arr,i,n){
//   let count =0;
//   if(i==arr.length){
//     return false;
//   }
//   if(arr[i]==n){
//     count++;
//     }
//     if(count==arr.length){
//       return count;
//     }

//   return linearSearch(arr,i+1,n);

// }
// console.log(linearSearch([1,2,4,5,6,7,5],0,5));
// console.log(linearSearch([1,2,4,5,6,7],0,9));

// let arrrr =[1,2,3,4,5,6];
//  arrrr=arrrr.reduce((a,b)=>a+b);
// console.log(arrrr);
//=================================================================================

/*Problem – Given an array of numbers. You need to reverse the array. For example –
Input – [1,2,3,4,5]
Output – [5,4,3,2,1]
Approach 1 – We can use swapping operation to get the desired output. Let’s see each step –
1) Initilaize two pointers - start=0, end = n-1 where n = number of elements in array
2) Swap elements present at start and end
3) Start = start+1, end = end -1
4) Repeat step1 till start <= end   */
// function reverseArray(array){
//     let start =0;
//     let end = array.length -1;
//     var temp= new Array;
//     for(let i = end; i>=start; i--){
//         temp.push(array[i]);
//     }
//     return temp;

// }
// console.log(reverseArray([1,2,3,4,5]));

// function reverseArRecurr(arr, start, end, temp, size) {
//     if (start == Math.floor(size / 2)) {
//       return arr;
//     }
//     temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     return reverseArRecurr(arr, start + 1, end - 1, temp, size);
//   }
//   console.log(reverseArRecurr([10, 121, 345, 12, 130, 300], 0, 5, 0, 5));

//=======================================================================
/*Given an array having 0,1 as input.We need to write a function that sorts the array in ascending order without using inbuilt
sort function
Expected time complexity :O(n)
Expected space complexity:O(1)
Example:
Input: {0, 1, 1,0, 0, 1}
Output: {0, 0, 0, 1, 1, 1}
Input:{0,0,1,1,0,1,0}
Output:{0,0,0,0,1,1,1}     */

//==================================================================================================================
//UCBSR of bubble sort
//[9,3,5,7,6,3,2,9]
// --> either make the given arry into ascending or descending
//--> to sort compare 0th index and 0+1 index
//--> after comparing if the result is negative swap both index elements
//--> repeat above steps till array.length
// --> Above steps are for inner loop
// --> run outer loop to itereate over all elements
// arr.length-1
//--> [9,   3,   5,   7,   10,   3,   2,   9]
// --> j    j+1                            k
//-->  i
//--> [3,   9,   5,   7,   10,   3,   2,   9]
// --> i    j   j +1                       k
//--> [3,   5,   9,   7,   10,   3,   2,   9]
// --> i         j   j +1       =          k
//--> [3,   5,   7,   9,   10,   3,   2,   9]
// --> i              j   j +1             k
//--> [3,   5,   7,   9,   10,   3,   2,   9]
// --> i                   j   j +1        k
//--> [3,   5,   7,   9,   3,   10,   2,   9]
// --> i                         j   j +1  k
//--> [3,   5,   7,   9,   3,   2,   10,   9]
// --> i                             j   j +1
//                                         k
//--> [3,   5,   7,   9,   3,   2,   9,   10]
// --> i                             j   j +1
//                                   k

// function bubbleSort(array){
//   let k = array.length-1;
//   for(let i=0; i<=array.length-1; i++){
//     let swap= false;
//     for(let j=0; j<=array.length-1; j++){
//       if(array[j]>array[j+1]){
//         let temp= array[j];
//         array[j]= array[j+1];
//         array[j+1]= temp;
//         swap=true;
//       }
//     }
//     k--;
//     if(swap==false){
//        return array;
//     }
//   }
// }
// console.log(bubbleSort([9,3,5,7,10,3,2,9]));
//================================================================================================
// selection sort
// selection sort --> element ko select karke sort karta hai
// [5,   3,   4,   1,   2] j=i+1
//                      j
//  i            min
// [1,   3,   4,   5,   5]
//                 j
//       i
//                     min
//
// function Sort(arr){
//   let min =0;
//   for(let i=0; i<=arr.length-2; i++){
//     min = i;
//     for(let j=i+1; j<=arr.length-1; j++){
//       if(arr[j]<arr[min]){
//         min= j;
//       }
//     }
//     if(min!=i){
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }
// console.log(Sort([5,3,4,1,2]));
// console.log(Sort([8,3,7,1,5]));
//===============================other methods==========================================
// function reverseArray(array){
//   const temp =[];
//   let j=0;
//   for(let i=array.length-1; i>=0;i--){
//     temp[j]=array[i];
//     j++;
//   }
//   return temp;

// }
// console.log(reverseArray([1,2,5,4,3]));

//===================================================================================================================
// function rr(arr) {
//   let k = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       k = i;
//       break;
//     }
//   }
//   // k is the variable where increment stops
//   // creating temp variable
//   let tempArr = [];
//   for (let i = 0; i < k; i++) {
//     tempArr[i] = arr[i];
//   }
//   let f = arr.length - 1;
//   for (let i = k; i <= arr.length - 1; i++) {
//     tempArr[k] = arr[f];
//     f--;
//     k++;
//   }
//   console.log(tempArr);
// }

// rr([1, 2, 5, 4, 3]);

//``````````````````````````````````````````````````````````````````````````````````````````````````````````//
// function TransSort(array){
//   let temp=0;
//   for(let i=0; i<array.length; i++){
//     for(let j=i+1; j<array.length; j++){
//       if(array[j]<array[i]){
//         temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
//   return array;

// }
// console.log(TransSort([6,3,0,7,6,2,6,3]));

//`````````````````````````````````````````````````````````````````````````````````
// // /*=================bubbluSort using one loop===================================== */
// function bubbleSort1(array1) {
//   let temp = 0;
//   for (let i = 0; i < array1.length - 1; i++) {
//     let j = i + 1;
//     if (array1[j] < array1[i]) {
//       j++;
//       temp = array1[j];
//       array1[j] = array1[i];
//       array1[i] = temp;
//     }
//   }
//   return array1;
// }
// console.log(bubbleSort1([6, 3, 0, 7, 6, 2, 6, 3]));

// //````````````````````````````````````````````````````````````````````````````````

// function bubble( arr){
//   let temp =0;
//   for(let i=arr.length; i>0; i--){
//     for(let j=0; j= i-1; j++){
//       if(arr[j]< arr[j+1]){
//         temp = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubble([6,3,0,7,6,2,6,3]));

//````````````````````````````````````````````````````````````````````````````````````
/*pesudocode==>
Store the first element as the smallest value
Compare this item to the next item until we find a smaller number
If a smaller number is found designate the smaller number to new min
if the min is not i swap min index
repeat until sorted
*/

// function selectionSort(arr){
//   for(let i=0; i<arr.length; i++){
//     let min=i;
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[j]<arr[min]){
//         min = j;
//       }
//     }
//     let temp = arr[min];
//     arr[min] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }
// console.log(selectionSort([9,1,9,8,5,3,1,9]));
//``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
/* what is the deiffrence between insertion,bubble and selection===>
Insertion Sort         Bubble                Sele
ction
[5,3,8,4,6]          [5,3,8,4,6]              [5,3,8,4,6]
[3,5,8,4,6]          [3,5,4,6,8]              [3,5,8,4,6]
[3,4,5,8,6]          [3,4,5,6,8]              [3,4,8,5,6]
[3,4,5,6,8]                                   [3,4,5,8,6]
                                              [3,4,5,6,8]
*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//insertion sort==>

// function InsertionSort(arr){
//   for(let i=1; i<arr.length; i++){
//     let currentValue = arr[i];
//     for(var j=i-1; j>=0; j--){
//       if(arr[j] >currentValue){
//         arr[j+1]=arr[j];
//       }
//     }
//     arr[j]=currentValue;
//   }
//   return arr;
// }
// console.log(InsertionSort([5,3,8,4,6]));

//``````````````````````````````````````````````````````````````````````````````````````````````````````````````````
/* */
function MergeSort(arr1, arr2) {
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;

}

// console.log(MergeSort([1, 10, 50], [1, 2, 14, 99, 100]));

function divideConqure(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = divideConqure(arr.slice(0, mid));
    let right = divideConqure(arr.slice(mid));
    return MergeSort(left, right);

}
console.log(divideConqure([24, 10, 76, 73, 6]));
// console.log(divideConqure([24, 10, 76, 73]));

//`````````````````````````````````````````````````````````````````````````````````
// quick sort
/*
 * [5,2,1,8,4,7,6,3]
 * [5,2,1]
 *[5,2,1,8,4] --> finds smaller than 5 i.e. 4
 *[5,2,1,4,8,7,6,] --> swaps between immediate larger with smaller i.e. 8 and 4
 *[5,2,1,4,8,7,6,3]--> find smaller 3
 *[5,2,1,4,3,7,6,8] --> swaps 8 with 3
elemnt at the count+1 position.
However that will not make the left side of the pivot sorted. So while counting
we also swap between smaller elements compared to the pivot point and larger elements
next to the pivot point. While swaping not only do we send larger elements at
the back of the array we also start bringing smaller elements
to the beginning of the array. Now after the comparision has reached the end;
we know that all smaller elemnts to the right of the pivot needs to be at the left.
So we swap between the last smallest element and the pivot.
*/
// function pivotfinder(arr) {
//   // step 1 creating a count variable to find the correct position of pivot element
//   let count = 0;
//   // creating a pivot index
//   // running a for loop to find the correct position of pivot element
//   // and then to swap all smaller elements
//   let pivot = arr[0];
//   let pivotIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // condition to increment count. If any element is smaller than the pivot element then we
//     // increase count
//     if (pivot > arr[i]) {
//       // incrementing count
//       count++;
//       // swaping elements
//       let temp = arr[i];
//       arr[i] = arr[count];
//       arr[count] = temp;
//     }
//   }
//   //Last swapp between pivot and count to cement pivot in its correct position
//   let temp = arr[pivotIndex];
//   arr[pivotIndex] = arr[count];
//   arr[count] = temp;

//   return arr;
// }

// console.log(pivotfinder([5, 3, 6, 7, 4]));

/*==============================find pivat======================================== */
// function findpivat(arr) {
//   let count = 0;
//   let pivat = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (pivat > arr[i]) {
//       count++;
//       let temp = arr[i];
//       arr[i] = arr[count]
//       arr[count] = temp;
//     }
//   }
//   temp = arr[count];
//   arr[count] = arr[0];
//   arr[0] = temp;
//   return arr;
//  }
// console.log(findpivat([5, 3, 6, 7, 4]));
//===============================second method find pivot======================

// function pivot(arr, start = 0, end=arr.length+1){
//   let pivat = arr[start];
//   let count = 0;
//   function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   for( let i = start+1; i<arr.length; i++){
//     if(pivat>arr[i]){
//       count++;
//       swap(arr,count,i);
//     }
//   }
//   swap(arr,start,count);
//   return arr;
// }
// console.log(pivot([5,3,6,7,4]));
//===========================================================================================================

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);
// console.log("My car is " + myCar.age() + " years old.");

//=========================================================================================================
// class student {
//   constructor(firstName, lastname, year) {
//     this.firstName = firstName;
//     this.lastname = lastname;
//     this.grade = year;
//     this.absent = 0;
//   }
//   fullname() {
//     return `your full name is ${this.firstName} ${this.lastname}`;
//   }
//   markLate() {
//     this.absent += 1;
//     if (this.absent >= 3) {
//       return `you are chutiya`;
//     }
//     return `${this.firstName} ${this.lastname} has been late ${this.absent}`;
//   }
// }
// const myStudent = new student("manish", "mehta", 2019);
// myStudent.markLate();
// myStudent.markLate();
// myStudent.markLate();
// console.log(myStudent.markLate());
