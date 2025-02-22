class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start) {
    let distances = {};
    let pq = new PriorityQueue();
    let previous = {};
    let path = [];

    // Step 1: Initialize distances with Infinity, set start node to 0
    for (let vertex in this.adjacencyList) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      previous[vertex] = null;
    }

    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
      let { node: smallest } = pq.dequeue();

      if (smallest) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;
            pq.enqueue(neighbor.node, candidate);
          }
        }
      }
    }
    return { distances, previous };
  }
}

// Example Execution
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 1);
g.addEdge("B", "C", 2);
g.addEdge("B", "D", 5);
g.addEdge("C", "D", 3);

console.log(g.dijkstra("A"));
