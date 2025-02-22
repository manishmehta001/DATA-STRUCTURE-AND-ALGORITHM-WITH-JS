// write a programe using recursion find factorial of any given number//

function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(10));