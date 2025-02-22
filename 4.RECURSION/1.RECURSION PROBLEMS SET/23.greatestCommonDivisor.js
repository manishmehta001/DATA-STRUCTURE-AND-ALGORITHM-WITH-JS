/*
Problem 9:
Write a recursive function that finds the gcd of two non-negative integers.
Input:
25 8895
Output:
5
*/
const gcd = (a, b) => {
  if (b === 0) return a; // Base case
  return gcd(b, a % b); // Recursive call
};

const a = 25,
  b = 8895;
console.log(gcd(a, b)); // Output: 5

/*
Dry Run for Input (25, 8895)

Step	a	    b	    a % b	            Next Call
------------------------------------------------------------------------
1	    25	    8895	25 % 8895 = 25	    gcd(8895, 25)
2	    8895	25	    8895 % 25 = 20	    gcd(25, 20)
3	    25	    20	    25 % 20 = 5	        gcd(20, 5)
4	    20	    5	    20 % 5 = 0	        gcd(5, 0) → Return 5

*/
