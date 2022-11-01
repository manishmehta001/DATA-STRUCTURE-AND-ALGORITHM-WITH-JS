/*
 * in stacks we care for the time complexity to be O(1)
 * that is constant time. If we use push and pop
 * then the time complexity becomes O(n) as pop we pop from the
 * end of a singly linked list. In order to pop from the end we traverse the entire list.
 * However in an array stack this would be O(1) as popping an array is O(1).
 * Therefore in order to make the deleting of an element O(1) in a singly linked
 * list we use shift and unshift. If it was a doubly linked list we could have used push and pop and gotten O(1)
 *
 * Now we use shift and unshift but we name it as push and pop knowingly well and good
 *  that singly linked lists O(1) can be achived only be shift and unshift.
 * So why do we name it wronly.
 * We name it wrongly because in array stack we use push and pop and also
 * in doubly linked list stack we use push and pop. So just to keep the
 * naming same we name it push and pop. which is technically wrong but accepted I guess.
 */

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new node(value);
        if (this.first == null) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }
    pop() {
        if (this.first == null) {
            return undefined;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        let popNode = this.first;
        this.first = popNode.next;
        popNode.next = null
        this.size--;
        return popNode;
    }

}
var stackList = new stack();
stackList.push("a");
stackList.push("b");
stackList.push("c");
console.log(stackList.pop());
console.log(stackList.pop());
console.log(stackList.pop());
console.log(stackList);