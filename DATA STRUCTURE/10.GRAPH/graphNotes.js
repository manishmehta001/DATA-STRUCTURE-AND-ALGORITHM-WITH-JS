class Graph {
  constructor() {
    this.adjacencyList = {}; // Using an object as an adjacency list
  }

  // Add a new vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices (Undirected Graph)
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      console.log("Vertex not found!");
      return;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Remove a vertex from the graph
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]?.length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Display the adjacency list of the graph
  display() {
    console.log("Graph Representation:");
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
    }
  }

  // Depth-First Search (DFS) - Recursive
  dfs(start, visited = new Set()) {
    if (!start || visited.has(start)) return;
    visited.add(start);
    console.log(start);
    for (let neighbor of this.adjacencyList[start]) {
      this.dfs(neighbor, visited);
    }
  }

  // Breadth-First Search (BFS) - Iterative
  bfs(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length) {
      let vertex = queue.shift();
      console.log(vertex);
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example usage:
const g = new Graph();

// Adding vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

// Adding edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");

// Display graph
g.display();

// Traversals
console.log("\nDFS Traversal:");
g.dfs("A"); // Output: A → B → D → E → C

console.log("\nBFS Traversal:");
g.bfs("A"); // Output: A → B → C → D → E

// Removing edge
console.log("\nRemoving edge B - D");
g.removeEdge("B", "D");
g.display();

// Removing a vertex
console.log("\nRemoving vertex C");
g.removeVertex("C");
g.display();
