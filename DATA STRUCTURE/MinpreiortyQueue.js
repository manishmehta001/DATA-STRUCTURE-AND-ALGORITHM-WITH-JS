class priorityQueue {
    constructor() {
        this.value = [];
    }
    enueue(value, priority) {
        let newnode = new node(value, priority)
        this.value.push(newnode);
        this.bubblup();
    }
    bubblup() {
        //declear index and value of element.
        let index = this.value.length - 1;
        let element = this.value[index];
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.value[parentIndex];
            if (element.priority >= parent.priority) {
                break;
            }
            this.value[parentIndex] = element;
            this.value[index] = parent
            index = parentIndex;
        }
    }
    dequeue() {
        let Min = this.value[0];
        let end = this.value.pop();
        if (this.value.length > 0) {
            this.value[0] = end;
            this.shinkDown();
        }
        return Min;
    }
    shinkDown() {
        let index = 0;
        const length = this.value.length;
        const element = this.value[0];
        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let leftChild;
            let rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.value[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.value[rightChildIndex];
                if ((swap === null && rightChild.priority < element) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) {
                break;
            }
            this.value[index] = this.value[swap];
            this.value[swap] = element;
            index = swap;

        }
    }
}
class node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

let NewPriority = new priorityQueue();
NewPriority.enueue("common cold", 5);
NewPriority.enueue("gun shot wound", 1);
NewPriority.enueue("high fever", 4);
NewPriority.dequeue();
NewPriority.dequeue();
NewPriority.dequeue();
console.log(NewPriority);