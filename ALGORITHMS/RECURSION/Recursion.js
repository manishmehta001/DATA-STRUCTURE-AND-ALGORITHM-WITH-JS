/* what is Recursion in java script?
Recursion==> recursion is a technique for itreating over an opreation by having a function call itself
            repeatedly until it arrives at a result.             */
//==================================================================================================================
/*1. write a finction called power which accepts a base and an exponent
The function should return the power of the base
to the exponent
 */
function GetPower(num, power) {
    if (power == 1) {
        return num;
    }
    else {
        return num * GetPower(num, power - 1);
    }
}
console.log("result is: ", + GetPower(4, 3));

//====================================================================================
