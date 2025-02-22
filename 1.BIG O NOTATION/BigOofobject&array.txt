/*Analyzing Performance of Arrays and Objects
Objet {key: “value”}
Objects: in objects there are numbering of the data. The data's are basically in key value pairs. Therefore the data is 
basically unordered. The Big O of objects are as follows:
Note: accessing information in objects in JS is constant time because we then simply find the key and return it However 
in searching we go inside each key and check for the value if any key contains the value then that key is returned.

	• Insertion - O(1) --> we simply add one by one.
	
	• Removal - O(1) --> why not O(n) --> it is not o(n) because we are looking for they key to remove. It is constant 
    because the number of keys in the object is constant. JS is built in such a way that the accessing key is O(1) in 
    objects as they are not ordered.
	
	• Searching -O(n) --> why O(n) Answer--> We do not search for the key but for the value we search if the value is 
    available in any key if it is available then that key value pair is returned. We go through each key and compare 
    each of the values one by one.
	
	• Access - O(1) --> if searching is O(n) then why  not accessing them is O(n)--> Answer -->  accessing simply needs 
    the key.
Side Note: Searching has something to do with hashing. 

Big O of object methods
	• Object.keys - O(n)
	• Object.values -O(n)
	• Object.entries - O(n)
	• Object.hasOwnPropety - O(1)

Arrays

Arrays store data in an ordered manner and that can often become costly. 
Big O of Arrays
	• Insertion - It depends --> if we add at the end then simply one more index is added but if we add at the beginning
     or middle then all indexes has to be changed. So it can be
	O(1) or O(n) depending on the situation. 
	• Removal- It depends --> Same as insertion.
	•  Searching --> O(n) --> we go through all elements of the array.
	• Access --> O(1) --> if we know the index we straightly go to the element.

Big O of Array Methods
Whenever there is re indexing involved the Big O becomes O(n) when using array methods.
	• Push - O(1) 
	• Pop-O(1)
	• Shift-O(n)--> re index
	• Unshift O(n) --> re index
	• Concat - O(n) 
	• Slice - O(n)
	• Splice - O(n)
	• Sort - O(n * log n)
	• forEach/map/filter/reduce --> O(n)
 */