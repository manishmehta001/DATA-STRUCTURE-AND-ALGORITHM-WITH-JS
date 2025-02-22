/*print an integer number in between x and y 
input =>  x = 3,   y = 9
output=>  4,5,6,7,8        */

function PrintIntegerOfXandY(x, y) {
    let array = [];
    if (x == y - 1) {
        return array;
    }
    array.push(x + 1);
    return array.concat(PrintIntegerOfXandY(x + 1, y));
}
console.log(PrintIntegerOfXandY(3, 9));