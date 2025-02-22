/*
Write a recursive program to determine whether a given integer is prime or not.
Input:
49
999983
1
Output:
not prime
prime
not prime
*/

const isPrimeRecursive = (n, i = 2) => {
  if (n <= 1) return false; // 0 and 1 are not prime
  if (n === 2) return true; // 2 is the only even prime number
  if (n % i === 0) return false; // If divisible, it's not prime
  if (i * i > n) return true; // If we checked up to sqrt(n), it's prime

  return isPrimeRecursive(n, i + 1); // Check the next divisor
};

const checkPrime = (n) =>
  console.log(isPrimeRecursive(n) ? "prime" : "not prime");

checkPrime(49);
checkPrime(999983);
checkPrime(1);

/*
Explanation:

Base Cases:
If n <= 1, return false (not prime).
If n == 2, return true (since 2 is prime).
If n is divisible by i, return false (not prime).
If i * i > n, return true (prime).

Recursive Case:
Recursively check n with the next divisor (i + 1).

Dry Run for n = 49

Step	n	  i	  Condition	  Output
1	    49	2	  49 % 2 ≠ 0	Continue
2	    49	3	  49 % 3 ≠ 0	Continue
3	    49	4	  49 % 4 ≠ 0	Continue
4	    49	5	  49 % 5 ≠ 0	Continue
5	    49	6	  49 % 6 ≠ 0	Continue
6	    49	7	  49 % 7 = 0	Return false (not prime)

*/
