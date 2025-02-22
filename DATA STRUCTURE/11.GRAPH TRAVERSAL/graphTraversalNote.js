class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // For undirected graph
  }

  // Recursive DFS
  dfsRecursive(vertex, visited = new Set()) {
    if (!vertex || visited.has(vertex)) return;
    console.log(vertex); // Visit node
    visited.add(vertex);
    for (let neighbor of this.adjList.get(vertex)) {
      this.dfsRecursive(neighbor, visited);
    }
  }

  // Iterative DFS
  dfsIterative(start) {
    let stack = [start];
    let visited = new Set();

    while (stack.length > 0) {
      let vertex = stack.pop();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        for (let neighbor of this.adjList.get(vertex)) {
          stack.push(neighbor);
        }
      }
    }
  }

  // BFS
  bfs(start) {
    let queue = [start];
    let visited = new Set();

    while (queue.length > 0) {
      let vertex = queue.shift(); // Dequeue
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        for (let neighbor of this.adjList.get(vertex)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example Usage
const g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);

g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(2, 5);
g.addEdge(3, 6);

console.log("DFS Recursive:");
g.dfsRecursive(1);

console.log("DFS Iterative:");
g.dfsIterative(1);

console.log("BFS:");
g.bfs(1);
