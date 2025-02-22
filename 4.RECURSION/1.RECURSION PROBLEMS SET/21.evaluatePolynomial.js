/*
Problem 5:
Write a recursive solution to evaluate the previous polynomial for any given x and n. Like, when x=2 and n=5, we have 1 + x + x2 + ................. + xn-1 = 31
Input:
2 5
Output:
31
*/

const evaluatePolynomial = (x, n, i = 0) => {
  if (i === n) return 0; // Base case: When i reaches n, stop recursion

  return Math.pow(x, i) + evaluatePolynomial(x, n, i + 1); // Add current term and recurse
};

const x = 2,
  n = 5;
console.log(evaluatePolynomial(x, n)); // Output: 31

/*
Explanation:

Base Case:
If i === n, return 0 (stopping condition).

Recursive Case:
Compute 
𝑥
𝑖
x 
i
  (i.e., Math.pow(x, i)).
Add it to the recursive call for the next term.

Dry Run for x = 2, n = 5:

Step	        Expression	                        Value
i = 0	2^0 + evaluatePolynomial(2, 5, 1)	        1 + ?
i = 1	2^1 + evaluatePolynomial(2, 5, 2)	        2 + ?
i = 2	2^2 + evaluatePolynomial(2, 5, 3)	        4 + ?
i = 3	2^3 + evaluatePolynomial(2, 5, 4)	        8 + ?
i = 4	2^4 + evaluatePolynomial(2, 5, 5)	        16 + ?
i = 5	Base Case, returns 0	

Final sum: 1 + 2 + 4 + 8 + 16 = 31
*/
