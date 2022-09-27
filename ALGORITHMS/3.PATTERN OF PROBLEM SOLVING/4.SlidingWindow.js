/*sliding window pattern==>
Before understanding lets visualize sliding windows found in homes. The windows have panes when we don’t want the window 
to be open we move the panes and close the window also say our window at home have total three panes then if we want wind 
to come in we can again move around the window panes to the desired location and let the wind or light come in.
 
Similarly in Sliding window problems in JS we can think of the entire array or string as a window and we create a pane. 
Now depending on the conditions we move the pane around and find the desired value. We can also increase the size of the 
pane depending on the situation. We can also close the window by closing the window pane. 
• This pattern involves creating a window which can either be an   array or number from one position to another
• Depending on a certain condition, the window either increases or  closes (and a new window is created)
• Very useful for keeping track of a subset of data in an array/string etc.

Example==>
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should 
calculate the maximum sum of n consecutive elements in the array.
maxSubarraySum ([1,2,5,2,8,1,5], 2) // 10 
maxSubarraySum ([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6], 1)      // 6
maxSubarraySum([4,2,1,6,2],4)    // 13
maxSubarraySum([],4)            // null           */

function maxSubarraySum(array,num){
    let max = 0;
    for(let i=0; i<=array.length-num; i++){
        let temp = 0;
        for(let j=1; j<=num; j++){
            temp += array[i+j];
            console.log("temp-",temp ,"-", "max-",max ,"-", i );
        }
        if(temp > max){
            max = temp;
        }
        // console.log(temp,max);
    }
    return max ;

}                                    
// maxSubarraySum([1,2,5,2,8,1,5], 2);
                              
console.log(maxSubarraySum ([1,2,5,2,8,1,5,10,11,12,0,19],4));
// console.log(maxSubarraySum([4,2,1,6],1));
// console.log(maxSubarraySum([4,2,1,6,2],4));

