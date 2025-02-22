class Node {
  constructor(value, priorty) {
    this.value = value;
    this.priorty = priorty;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.value.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.value.length - 1;
    const element = this.value[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];

      if (element.priority >= parent.priority) break;

      this.value[parentIdx] = element;
      this.value[idx] = parent;

      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.value.length;
    const element = this.value[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }

        if (rightChildIdx < length) {
          rightChild = this.value[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < element.priority)
          ) {
            swap = rightChild;
          }
        }
        if (swap === null) break;
        this.value[idx] = this.value[swap];
        this.value[swap] = element;
        idx = swap;
      }
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gun shot wound", 5);
ER.enqueue("high fever", 2);

// ER.dequeue();
// ER.dequeue();
console.log(ER);
