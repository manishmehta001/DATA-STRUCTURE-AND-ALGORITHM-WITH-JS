class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Preorder Traversal (Root -> Left -> Right)
  preorder(node, result = []) {
    if (node) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  // Inorder Traversal (Left -> Root -> Right)
  inorder(node, result = []) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }

  // Postorder Traversal (Left -> Right -> Root)
  postorder(node, result = []) {
    if (node) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

// Example Usage
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

console.log("Preorder Traversal:", tree.preorder(tree.root));
console.log("Inorder Traversal:", tree.inorder(tree.root));
console.log("Postorder Traversal:", tree.postorder(tree.root));
