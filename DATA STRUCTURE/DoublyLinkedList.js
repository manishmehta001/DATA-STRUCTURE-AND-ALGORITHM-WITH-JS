class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        var newNode = new node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.head == null) {
            return undefined;
        }
        let popNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popNode.prev;
            this.tail.next = null;
            popNode.prev = null;
        }
        this.length--;
        return popNode;
    }
    shift() {
        if (this.head == null) {
            return undefined;
        }
        let shiftNode = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftNode.next;
            this.head.prev = null;
            shiftNode.next = null;
        }
        this.length--;
        return shiftNode;
    }
    unshift(value) {
        var newNode = new node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        newNode.prev = null;
        this.length++;
        return newNode;
    }
    get(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        if (index == 0) {
            return this.head;
        }
        var current = this.head
        while (index > 0) {
            current = current.next;
            index--;
        }
        return current;
    }
    set(index, value) {
        let found = this.get(index);
        if (found) {
            found.value = value;
            return found;
        }
    }
    insert(index, value) {
        if (index < 0 || this.length < index) {
            return undefined;
        }
        if (index == this.length) {
            return this.push(value);
        }
        if (index == 0) {
            return this.Unshift(value);
        }
        let newNode = new node(value);
        let before = this.get(index - 1);
        let temp = before.next;
        before.next = newNode;
        newNode.prev = before
        newNode.next = temp;
        temp.prev = newNode;
        this.length++;
        return newNode;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        if (index == 0) {
            return this.shift();
        }
        if (index == this.length) {
            return this.pop();
        }
        let before = this.get(index - 1);
        let temp = before.next.next
        before.next = temp;
        temp.prev = before;
        this.length--;
        return before;
    }
}
var list = new doublyLinkedList();
list.push("a");
list.push("b");
list.push("c");
console.log(list.insert(1, "manish"));
console.log("=======================================================");
console.log(list);