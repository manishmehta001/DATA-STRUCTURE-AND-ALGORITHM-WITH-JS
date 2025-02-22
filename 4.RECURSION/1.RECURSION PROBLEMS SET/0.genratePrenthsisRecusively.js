/*Problem statement
You are given a ‘n’ pair of parentheses, write a function to generate all combinations of well-formed parentheses
If you are given n = 3, this means we need to generate well formed valid parentheses using 3 open brackets 3
close brackets
Then you have to return the combinations of all from parentheses, Below we have total 5 combinations of
parentheses that we can generate when you have n = 3
[ “((()))”,
 “(()())”,
 “(())()”,
 “()(())”,
 “()()()” ]
• If you have n = 2, then we have to return the combinations of all parentheses
[ “(())”,
 “()()” ]
• For n = 1,
 [ “()” ]                  */
const result =[];
const n = 3;
let str ="";
function genratePrenthesesRecursively(str,left,right){
    // base condition
    if(str.length == n*2){
        result.push(str);
        return;
    }
    //towords the left "(" prentheses
    if(left!=n){
        genratePrenthesesRecursively(str+"(", left+1, right)
    }
    if(right<left){
        genratePrenthesesRecursively(str+")", left,right+1)
    }
}
genratePrenthesesRecursively(str,0,0);
console.log(result);