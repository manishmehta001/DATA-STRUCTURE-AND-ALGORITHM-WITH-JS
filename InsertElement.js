/*write a programe to insert a element 70 in 2nd index positon of any random array */

// function insertElement(array){
//     let element= 70;
//     let positon=[2];
//     for(let i =0; i<=array.length; i++){
//         if(array[i]==positon){
//             array.push(element);
//         }
//     }
//     console.log(array);
// }
// // insertElement([60,30,10,67,40]);

function insertElement(array) {
    let element = 70;
    let positon = 2;
    for (let i = 0; i <= array.length; i++) {
      if (i == positon) {
        // array.push(element);
        array.splice(positon, 0, element);
        // console.log(array);
        return array;
      }
    }
  }
  console.log(insertElement([60, 30, 10, 67, 40]));