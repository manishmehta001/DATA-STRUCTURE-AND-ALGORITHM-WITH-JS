/*Array traversing==>traverse each element from start to end element of array is called array traversing.
accessing==> accessing means that we can access any element of array using their index positon. index positon start with o */

function ArrayTravesal(data) {
    for (let i = 0; i <= data.length - 1; i++) {
        console.log(data[i]);
    }
}
let data = [9, 45, 2, 8, 23, 7, 78, 0, 11, 13, 15, 16];
ArrayTravesal(data);