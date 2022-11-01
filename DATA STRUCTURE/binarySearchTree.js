class node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    found(value) {
        if (this.root === null) {
            return undefined;
        }
        let current = this.root;
        while (current) {
            if (current == null) {
                return undefined;
            } else if (value == current.value) {
                return current;
            }
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
        }
    }
    breathFirstSearch() {
        let queue = [];
        let store = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            store.push(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        } return store;
    }
    DepthFirstSearch_preOrder() {
        let result = [];
        let current = this.root;
        function helper(node) {
            result.push(node.value);
            if (node.left != null) {
                helper(node.left);
            }
            if (node.right != null) {
                helper(node.right);
            }
        }
        helper(current);
        return result;
    }
    DepthFirstSearch_postOrder() {
        let result = [];
        let current = this.root;
        function traverse(node) {
            if (node.left != null) {
                traverse(node.left);
            }
            if (node.right != null) {
                traverse(node.right);
            }
            result.push(node.value);
        }
        traverse(current);
        return result;
    }
    DepthFirstSearch_inOrder() {
        let result = [];
        let current = this.root;
        function traverse(node) {
            if (node.left != null) {
                traverse(node.left);
            }
            result.push(node.value);
            if (node.right != null) {
                traverse(node.right);
            }
        }
        traverse(current);
        return result;
    }

}
var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);

console.log(bst.DepthFirstSearch_preOrder());
console.log(bst.DepthFirstSearch_postOrder());
console.log(bst.DepthFirstSearch_inOrder());