/*
Write a recursive solution to compute lcm of two integers. You must not use the formula lcm(a,b) = (a x b) / gcd(a,b); find lcm from scratch...
Input:
23 488
Output:
11224
*/
const lcm = (a, b, multiple = Math.max(a, b)) => {
  if (multiple % a === 0 && multiple % b === 0) {
    return multiple; // Found the LCM
  }
  return lcm(a, b, multiple + Math.max(a, b)); // Check the next multiple of the larger number
};

const a = 23,
  b = 488;
console.log(lcm(a, b)); // Output: 11224

/*
Explanation:
Base Case:

If multiple % a === 0 and multiple % b === 0, it means multiple is divisible by both a and b, and thus, it is the LCM.
We return the current multiple.

Recursive Case:

If the multiple is not divisible by both a and b, we increment the multiple by the larger of the two numbers and recursively check the next multiple.

Dry Run for Input a = 23 and b = 488:

Step	multiple	multiple % a	multiple % b	LCM Found?
1	    488	        488 % 23 = 21	488 % 488 = 0	    No
2	    976	        976 % 23 = 1	976 % 488 = 0	    No
3	    1464	    1464 % 23 = 0	1464 % 488 = 0	    Yes

We find that 1464 is the first number divisible by both 23 and 488.
*/
