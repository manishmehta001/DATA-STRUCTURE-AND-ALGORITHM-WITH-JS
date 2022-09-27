/*Write a function that takes a string and returns if string is a palindrome. */
function palindrome(str,i,j){
    if(i==j || i>j){
        return true;
    }
    if(!str[i]==str[j]){
        return false;
    }
    return palindrome(str,i+1,j-1);
}
const str ="naman";
console.log(palindrome(str,0,str.length-1));