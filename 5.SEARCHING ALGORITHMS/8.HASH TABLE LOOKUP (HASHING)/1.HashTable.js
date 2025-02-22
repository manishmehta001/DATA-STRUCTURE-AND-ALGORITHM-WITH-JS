class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  // Simple hash function
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.table.length;
  }

  // Insert a key-value pair
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]); // Handle collisions using chaining
  }

  // Retrieve value by key
  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) return undefined;
    for (let pair of this.table[index]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) return false;
    this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
    return true;
  }
}

// Example Usage:
const hashTable = new HashTable(5);
hashTable.set("25", "Value at index 0");
console.log(hashTable.get("25")); // Output: "Value at index 0"
hashTable.remove("25");
console.log(hashTable.get("25")); // Output: undefined

/*Dry Run Example (Size = 5, Hash Function: key % 5)
Let's insert 25 into the hash table:

Hash Calculation
    Hash function: 25 % 5 = 0
    Store 25 at index 0

Lookup
    Compute 25 % 5 = 0
    Retrieve the value stored at index 0 → Found 25! ✅ 
    
    
Time Complexity Analysis
Operation	Best Case	Worst Case (Collisions)
Insertion	O(1)	    O(n)
Lookup	    O(1)	    O(n)
Deletion	O(1)	    O(n)
With good hash functions and collision handling (chaining, open addressing), lookup stays at O(1) in most cases.

Use Case of Hash Tables
✅ Fast lookups in scenarios like:
        Database indexing
        Caching (e.g., LRU cache)
        Counting word frequencies
        Symbol tables in compilers

🚀 Hash tables provide fast key-value lookups and are widely used in programming!        
*/
