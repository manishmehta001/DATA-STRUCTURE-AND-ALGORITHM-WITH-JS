/*Space Complexity
We use Big O to determine the space required by an algorithm to run. The space that the algorithm uses without the input
is called auxiliary space. We are interested in auxiliary space complexity and not in how much space n is going to 
occupy as it grows. Meaning we are interested in the effect on space required by the algorithm as n grows. We are 
interested in what happens inside the algorithm.
 
Rule of Thumbs for space complexity
Primitive like boolean, numbers, undefined and null are constant space
Strings are O(n) space as strings store characters and each characters occupy space thus with increase in the number of 
characters the space increases.
Same with array and objects O(n) can be length of the object or the number of keys in an object.
(litlle confused on space complexity)--> need to revisit
 
Logarithm
n^exp = n x n … x(repeat n (base)  as many times exponent)
n^2 = n x n
In log the reverse happens we have the base and answer that we will get after multiplying base with itself exponent 
times. Our job is to find the exponent
Log base2 (8) = 3 --> means 2^3 = 8;
 
The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get the value 
that’s less than or equal to 1.
For example you have to divide 8 three times by 2 reach 1 therefore 
2 X 2 X 2 = 8; or 25 however is not perfectly divisible by 2  so in order to reach one we divide 25 by 2, 5 times see 
25/2=12.5, 12.5/2=6.25, 6.25/2=3.125, 3.125/2=1.5625, 1.5625/2=0.7813; --> 5 divisions by 2. log(25) base2 = 4.64; We 
do not care about accurate values we just care for the approx. values.
 
The Big O log(n) time complexity is better than linear complexity as with the change in base or change in n the 
increase is still far less than linear complexity
 */