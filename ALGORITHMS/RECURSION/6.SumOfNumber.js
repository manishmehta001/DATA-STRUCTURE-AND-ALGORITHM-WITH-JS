/* write a programe to sum  of given number using recusion  */

function sumRange(n){
    if(n==1){
        return 1;
    }
    return n + sumRange(n-1);
}
console.log(sumRange(5));