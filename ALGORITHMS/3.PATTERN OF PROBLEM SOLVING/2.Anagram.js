/*ANAGRAMS==>
Problem==>
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, 
phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
Example==>               
validAnagram('','') // true	
validAnagram('aaz', 'zza') // false 
validAnagram(anagram', 'nagaram) // true 
validAnagram("rat", "car") // false) // false 
validAnagram(awesome awesom') // false. 
validAnagram('qwerty', 'qeywrt') // true 
validAnagram(texttvisttime', 'timetwist text') // true    */     

function Anagrame(str1, str2){
    if(str1.length!==str2.length){
        return false;
    }
    for(let i = str1.length-1; i>=0; i--){
            if(temp==str2[j]){
                return true;
                
            }
            return false;
        }
    }

console.log(Anagrame("anagram","nagaram"));
console.log(Anagrame('awesome', 'awesom'));
console.log(Anagrame('qwerty', 'qeywrt'));
console.log(Anagrame('azz','zaa'));                    

/*===========================2nd methods using inbuild function================================================= 
function Anagrame(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let temp1 = str1.split('').sort().join('');
    // console.log(temp1);
    let temp2 = str2.split('').sort().join('');
    // console.log(temp2);
    if(temp1 == temp2){
        return true;
    }
    else{
        return false;
    }
}
console.log(Anagrame("anagram","nagaram"));
console.log(Anagrame('awesome', 'awesom'));
console.log(Anagrame('qwerty', 'qeywrt'));
console.log(Anagrame('azz','zaa'));  */
