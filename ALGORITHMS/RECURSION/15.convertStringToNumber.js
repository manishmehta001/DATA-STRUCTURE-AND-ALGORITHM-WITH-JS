/*Given a string str representing a string, the task is to convert the given string into an integer.
Examples: 

Input: str = “1234” 
Output: 1234 */
function convertStrToNum(str) {
    let result = []
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        result[j] = Number(str[i]);
        j++;
    }
    return result;
}
// console.log(convertStrToNum('1234'));

function convertStrToNum(str, i, j, result) {
    result[j] = Number(str[i]);
    if (i == str.length - 1) {
        return result;
    }
    return convertStrToNum(str, i + 1, j + 1, result);

}
console.log(convertStrToNum('1234', 0, 0, []))