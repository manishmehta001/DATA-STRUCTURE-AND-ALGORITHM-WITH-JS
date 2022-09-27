/* write a programe to print odd/even number using recuersion */

//======================================================================================
// function printNumber(n) {
//     // if (n==20) {
//     //     return "done";
//     // }
//     console.log(n);
//     if (n<=20 && n % 2 == 0) {
//         return printNumber(n +2);
//     }
// }
// let data = 0;
// printNumber(data);
function yo(n) {
    if (n == 20) {
      return n;
    }
    n += 2;
    console.log(n);
    return yo(n);
  }
  console.log(yo(0));