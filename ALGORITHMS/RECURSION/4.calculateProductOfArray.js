/*
3. We are required to write a JavaScript 
function that takes in an array of Integers. 
Our function should do the following two things −
Make use of a recursive approach.
Calculate the product of all the elements in the array.
And finally, it should return the product.
For example −
If the input array is −
const arr = [1, 3, 6, 0.2, 2, 5];
Then the output should be −
const output = 36;
*/
/*function ProductOfsum(array){
    if(array.length ==0){
        return 1;
    }
    return array[0]* ProductOfsum(array.splice(1));
}
console.log(ProductOfsum (array = [1, 3, 6, 0.2, 2, 5]));*/

//2nd methods==>

function productofArray(array, i, product) {
    if (i == array.length) {
        return product;
    }
    product = product * array[i];
    return productofArray(array, i + 1, product);

}
console.log(productofArray([1, 3, 6, 0.2, 2, 5], 0, 1))