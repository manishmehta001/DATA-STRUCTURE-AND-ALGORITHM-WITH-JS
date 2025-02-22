class Queue {
  constructor() {
    this.queue = []; // Array to store queue elements
    this.front = 0; // Index of the front element
    this.rear = -1; // Index of the rear element
  }

  // Enqueue operation - Add element to the rear of the queue
  enqueue(value) {
    this.rear++; // Move rear pointer
    this.queue[this.rear] = value; // Add element
    console.log(`${value} enqueued into queue`);
  }

  // Dequeue operation - Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue Underflow! Cannot dequeue from an empty queue.");
      return null;
    }
    let dequeuedValue = this.queue[this.front]; // Get front element
    this.front++; // Move front pointer forward
    console.log(`${dequeuedValue} dequeued from queue`);
    return dequeuedValue;
  }

  // Peek operation - Get the front element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
      return null;
    }
    console.log(`Front element is ${this.queue[this.front]}`);
    return this.queue[this.front];
  }

  // isEmpty operation - Check if the queue is empty
  isEmpty() {
    return this.front > this.rear;
  }

  // Size operation - Get number of elements in queue
  size() {
    let queueSize = this.rear - this.front + 1;
    console.log(`Queue size is ${queueSize}`);
    return queueSize;
  }

  // Display the queue
  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
      return;
    }
    console.log("Queue elements:");
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.queue[i]);
    }
  }
}

// Example Usage:
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.peek(); // Should display 10
myQueue.dequeue(); // Should remove 10
myQueue.size(); // Should return 2
myQueue.printQueue(); // Should display remaining elements
myQueue.isEmpty(); // Should return false
