//``````````````````````````````````````````````````````````````````````````````````````````````````````
//first class make node and create node value and its refrence pointer

// step 1 Create a class for making nodes --> val and next
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// step 2 Create a another class for making lists --> head tail and length
class singlylinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // step 3 push --> New node,Using node function, if statement for head when head is made just shift tail to new node and assign next
  push(value) {
    //call the node class to storing a newnode variable
    let newnode = new node(value);
    //decleartion of head
    if (!this.head) {
      this.head = new node(value);
      this.tail = this.head;
      //decleration of tail
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    //incrementing node length
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // console.log(current.value);
    // console.log(newTail.value);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.head == null;
      this.tail == null;
    }
    return currentHead;
  }
  Unshift(value) {
    let newnode = new node(value);
    //decleartion of head
    if (!this.head) {
      this.head = new node(value);
      this.tail = this.head;
    }
    newnode.next = this.head;
    this.head = newnode;
    this.length++;
    return this;
  }
  get(index) {
    if (index == 0) {
      return this.head
    }
    if (index >= this.length) {
      return undefined;
    }
    var current = this.head
    while (index > 0) {
      current = current.next;
      index--;
    }
    return current;
  }
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return foundNode;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || this.length < index) {
      return false;
    }
    if (index == this.length) {
      return !!this.push(value);
    }
    if (index == 0) {
      return !!this.Unshift(value);
    }
    var newnode = new node(value);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newnode;
    newnode.next = temp;
    this.length++;
    return newnode;
  }
  remove(index) {
    if (index < 0 || this.length < index) {
      return undefined;
    }
    if (index == 0) {
      return this.Unshift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    var prev = this.get(index - 1);
    var temp = prev.next.next;
    prev.next = temp;
    this.length--;
    return prev;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
var list = new singlylinkedlist();
list.push("a");
list.push("b");
list.push("c");
console.log(list.remove(1));
console.log(list);

