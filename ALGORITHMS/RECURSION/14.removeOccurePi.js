/*problem = Given a string, the task is to replace all occurrences of pi with 3.14 in the given string. 
Input : str = "pippppiiiipi"
Output : 3.14ppp3.14iii3.14*/
let str = "pippppiiiipi"
let newStr = str.replace('pi', '3.14');
console.log(newStr);