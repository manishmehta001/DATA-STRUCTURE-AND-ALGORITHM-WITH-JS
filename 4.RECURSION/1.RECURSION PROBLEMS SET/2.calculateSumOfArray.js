/*Take an array of size 10. Calculate sum of all array elements using tail recursion.*/

function CalculateSumOfArray(array,i,sum){
    if(i==array.length){
        return sum;
    }
    sum =sum  +array[i];
    return CalculateSumOfArray(array,i+1,sum);
}
console.log(CalculateSumOfArray([1,2,3,4,5],0,0));