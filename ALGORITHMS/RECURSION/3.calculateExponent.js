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

//2nd methods==>
function calcExponent(b, e) {
    if (e == 1) {
        return b;
    }

    return b * calcExponent(b, e - 1);
}
console.log(calcExponent(2, 3));
