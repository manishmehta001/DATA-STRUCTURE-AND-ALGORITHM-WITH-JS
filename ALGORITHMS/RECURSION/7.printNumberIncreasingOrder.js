/* write a programe to print increasing number till n */

function PrintIncreasingOrder(n) {
    if (n == 0) {
        return;
    }
    PrintIncreasingOrder(n - 1);
    console.log(n);
}
PrintIncreasingOrder(10);




