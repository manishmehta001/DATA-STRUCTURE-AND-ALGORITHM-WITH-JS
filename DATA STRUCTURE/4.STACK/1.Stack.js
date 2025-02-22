class Stack {
  constructor() {
    this.stack = []; // Array to store stack elements
    this.top = -1; // Index of the top element
  }

  // Push operation - Add element to the top of stack
  push(value) {
    this.top++; // Move top pointer
    this.stack[this.top] = value; // Add element
    console.log(`${value} pushed into stack`);
  }

  // Pop operation - Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow! Cannot pop from an empty stack.");
      return null;
    }
    let poppedValue = this.stack[this.top]; // Get top element
    this.top--; // Move top pointer down
    console.log(`${poppedValue} popped from stack`);
    return poppedValue;
  }

  // Peek operation - Get the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Empty!");
      return null;
    }
    console.log(`Top element is ${this.stack[this.top]}`);
    return this.stack[this.top];
  }

  // isEmpty operation - Check if stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Size operation - Get number of elements in stack
  size() {
    console.log(`Stack size is ${this.top + 1}`);
    return this.top + 1;
  }

  // Display the stack
  printStack() {
    if (this.isEmpty()) {
      console.log("Stack is Empty!");
      return;
    }
    console.log("Stack elements:");
    for (let i = this.top; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }
}

// Example Usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.peek(); // Should display 30
myStack.pop(); // Should remove 30
myStack.size(); // Should return 2
myStack.printStack(); // Should display remaining elements
myStack.isEmpty(); // Should return false
