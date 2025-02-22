// enqueue = real enqueue ==> enqueue => en for enter
// shit == real dequeue ==>dequeue => de for delete
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
  enqueue(value) {
    var newNode = new node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return undefined;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
var queueList = new queue();
queueList.enqueue("a");
queueList.enqueue("b");
console.log(queueList.dequeue());
// queueList.dequeue();
// console.log(queueList);
