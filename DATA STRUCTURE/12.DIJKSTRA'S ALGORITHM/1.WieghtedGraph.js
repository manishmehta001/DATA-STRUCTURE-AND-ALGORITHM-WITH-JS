class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  dijkstra(start, finish) {
    const node = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // Step 1: Initialize distances with Infinity, set start node to 0
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        node.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        node.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // Step 2: While there are nodes to visit
    while (node.values.length) {
      smallest = node.dequeue().val;

      if (smallest === finish) {
        // Step 3: Build path by backtracking
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        path.push(start); // Include start node
        return path.reverse(); // Return shortest path
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let nextNode of this.adjacencyList[smallest]) {
          // FIXED: Correct iteration
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // Update shortest distance
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            node.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return []; // Return empty if no path found
  }
}

// Test Graph
let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.dijkstra("A", "E")); // Expected Output: ['A', 'C', 'D', 'F', 'E']
