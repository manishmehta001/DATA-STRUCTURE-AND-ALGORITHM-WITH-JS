/*
Permutation in a String :-
Given two strings, s1 and s2, write a function isPermutation(s1, s2) that checks if one string is a permutation of the other.

Example:-
isPermutation("abc", "bca") ➞ true
isPermutation("abc", "abcd") ➞ false
isPermutation("hello", "lleho") ➞ true

Constraints:-
Both strings will consist only of lowercase alphabets (a-z).
The function should handle strings of up to length 10,000 efficiently.

*/

function isPermutation(s1, s2) {
  // Step 1: Check if both strings have the same length
  if (s1.length !== s2.length) {
    return false;
  }

  const splitS1 = s1.split('');
  const splitS2 = s2.split('');
  console.log(`splitS1 is ${splitS1} and ${splitS2} `);

  const sortS1 = splitS1.sort();
  const sortS2 = splitS2.sort();
  console.log(`sortS1 is ${sortS1} and ${sortS2} `);

  const joinS1 = sortS1.join();
  const joinS2 = sortS2.join();
  console.log(`joinS1 is ${joinS1} and ${joinS2} `);

  // Step 2: Sort both strings
  // const sortedS1 = s1.split('').sort().join('');
  // const sortedS2 = s2.split('').sort().join('');
  // console.log(`sortedS1 is ${sortedS1} and sortedS2 is ${sortedS2}`);

  // Step 3: Compare the sorted strings
  return joinS1 === joinS2;
  // return sortedS1 === sortedS2;
}

console.log(isPermutation('abc', 'bca'));
console.log(isPermutation('abc', 'abcd'));
console.log(isPermutation('hello', 'lleho'));
console.log(isPermutation('abc', 'bca'));
