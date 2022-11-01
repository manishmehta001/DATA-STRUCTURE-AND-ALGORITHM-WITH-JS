class MaxBinaryHeap {
    constructor() {
        this.value = [];
    }
    insert(value) {
        this.value.push(value);
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
            if (element <= parent) {
                break;
            }
            this.value[parentIndex] = element;
            this.value[index] = parent
            index = parentIndex;
        }
    }
    ExtractMax() {
        let max = this.value[0];
        let end = this.value.pop();
        if (this.value.length > 0) {
            this.value[0] = end;
            this.shinkDown();
        }
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.value[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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
let heap = new MaxBinaryHeap();
heap.insert(47);
heap.insert(39);
heap.insert(33);
heap.insert(27);
heap.insert(18);
heap.insert(55);
heap.insert(12);
heap.ExtractMax();
heap.ExtractMax();
heap.ExtractMax();
heap.ExtractMax();
heap.ExtractMax();
heap.ExtractMax();
heap.ExtractMax();
heap.ExtractMax();
console.log(heap);