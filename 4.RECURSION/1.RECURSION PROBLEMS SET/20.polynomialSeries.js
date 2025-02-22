/*
Write a recursive solution to print the polynomial series for any input n: 1 + x + x2 + ................. + xn-1
Input:
5
Output:
1 + x + x^2 + x^3 + x^4
*/
const polynomialSeries = (n, i = 0) => {
  if (i === n) return ""; // Base case: Stop when i reaches n

  return (
    (i === 0 ? "1" : `x^${i}`) +
    (i < n - 1 ? " + " : "") +
    polynomialSeries(n, i + 1)
  );
};

const n = 5;
console.log(polynomialSeries(n));
