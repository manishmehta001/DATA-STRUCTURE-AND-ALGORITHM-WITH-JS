class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }
    Hash(key) {
        let total = 0;
        let weired_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weired_prime + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this.Hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this.Hash(key);
        if (!this.keyMap[index]) {
            return false;
        }
        let length = this.keyMap[index].length;
        for (let i = 0; i < length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i];
            }
            else if (this.keyMap[index][i][0] === undefined) {
                return false;
            }
        }
    }
    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArray;
    }
    key() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                        keysArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArray;
    }
}
let HT = new HashTable();
HT.set("hello world", "good boy");
HT.set("dog", "are cool");
HT.set("cats", "are fine");
HT.set("i love", "pizza");
// console.log(HT.get("i love"));
// console.log(HT.get("fuck off"));
console.log(HT.key());
console.log(HT.values());
// console.log(HT);