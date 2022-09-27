/* write programe to che if array is sorted or not */
function ToCheqSortedArray(array,i){
    if(i==array.length){
        return true;
    }
    if(array[i]>array[i+1]){
        return false;
    }
    return ToCheqSortedArray(array,i+1);

}
console.log(ToCheqSortedArray([1,2,3,4,5,6],0));
console.log(ToCheqSortedArray([1,2,3,10,5,6],0));