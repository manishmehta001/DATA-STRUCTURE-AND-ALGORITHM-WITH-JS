// push = real push ==> enqueue => en for enter 
// shit == real shift ==>dequeue => de for delete
// queue works on FIFo

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        var newNode = new node(value);
        if (this.first == null) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }
    shift() {
        if (this.first == null) {
            return undefined;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        let shiftNode = this.first;
        this.first = shiftNode.next;
        this.size--;
        return shiftNode;
    }
}
var queueList = new queue();
queueList.push("a");
queueList.push("b");
console.log(queueList.shift());
// queueList.shift();
// console.log(queueList);