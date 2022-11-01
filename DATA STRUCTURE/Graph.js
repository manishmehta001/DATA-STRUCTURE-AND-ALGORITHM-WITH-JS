class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(V1, V2) {
        this.adjacencyList[V1].push(V2);
        this.adjacencyList[V2].push(V1);
    }
    removeEdge(V1, V2) {
        let index = this.adjacencyList[V1].indexOf(V2);
        this.adjacencyList[V1].splice(index, 1);
        index = this.adjacencyList[V2].indexOf(V1);
        this.adjacencyList[V2].splice(index, 1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            let adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        }
        dfs(start);
        return result;
    }
    breathFirstSearch(vertex) {
        let result = [];
        let visited = {};
        let currentvertex;
        visited[vertex] = true;
        while (queue.length) {
            currentvertex = queue.shift();
            result.push(currentvertex);
            this.adjacencyList[currentvertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}
let NewGraph = new Graph();
// NewGraph.addVertex("delhi");
// NewGraph.addVertex("kolkata");
// NewGraph.addVertex("jaipur");
// NewGraph.addVertex("lucknow");
// NewGraph.addEdge("lucknow", "delhi");
// NewGraph.addEdge("jaipur", "kolkata");
// NewGraph.addEdge("lucknow", "kolkata");
// // NewGraph.removeEdge("lucknow", "kolkata");
// NewGraph.removeEdge("lucknow", "delhi");
// NewGraph.removeVertex("delhi");
NewGraph.addVertex("a");
NewGraph.addVertex("b");
NewGraph.addVertex("c");
NewGraph.addVertex("d");
NewGraph.addVertex("e");
NewGraph.addVertex("f");
NewGraph.addEdge("a", "b")
NewGraph.addEdge("a", "c")
NewGraph.addEdge("b", "d")
NewGraph.addEdge("c", "e")
NewGraph.addEdge("d", "e")
NewGraph.addEdge("d", "f")
NewGraph.addEdge("e", "f")
console.log(NewGraph.depthFirstRecursive("a"));


console.log(NewGraph);