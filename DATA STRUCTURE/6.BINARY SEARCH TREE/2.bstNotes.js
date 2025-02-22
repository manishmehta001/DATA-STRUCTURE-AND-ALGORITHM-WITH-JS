class TreeNode {
  constructor(value) {
    this.data = value; // Node value
    this.left = null; // Left child reference
    this.right = null; // Right child reference
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Initially, BST is empty
  }

  // 🎯 Insert Operation (Adding a New Node)
  insert(value) {
    this.root = this.#insertRecursive(this.root, value);
  }

  #insertRecursive(node, value) {
    if (node === null) {
      return new TreeNode(value); // Insert new node
    }
    if (value < node.data) {
      node.left = this.#insertRecursive(node.left, value); // Go left
    } else {
      node.right = this.#insertRecursive(node.right, value); // Go right
    }
    return node;
  }

  // 🎯 Search Operation (Find a Value in BST)
  search(value) {
    return this.#searchRecursive(this.root, value);
  }

  #searchRecursive(node, value) {
    if (node === null || node.data === value) {
      return node; // Found or reached null (not found)
    }
    return value < node.data
      ? this.#searchRecursive(node.left, value) // Go left
      : this.#searchRecursive(node.right, value); // Go right
  }

  // 🎯 Minimum Value (Find the Smallest Element)
  findMin() {
    let current = this.root;
    while (current?.left) {
      current = current.left; // Go left until null
    }
    return current ? current.data : null;
  }

  // 🎯 Maximum Value (Find the Largest Element)
  findMax() {
    let current = this.root;
    while (current?.right) {
      current = current.right; // Go right until null
    }
    return current ? current.data : null;
  }

  // 🎯 Delete Operation (Remove a Node)
  delete(value) {
    this.root = this.#deleteRecursive(this.root, value);
  }

  #deleteRecursive(node, value) {
    if (node === null) return node; // Not found

    if (value < node.data) {
      node.left = this.#deleteRecursive(node.left, value); // Go left
    } else if (value > node.data) {
      node.right = this.#deleteRecursive(node.right, value); // Go right
    } else {
      // Node with one or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children: Get the inorder successor (smallest in right subtree)
      node.data = this.#findMinNode(node.right).data;
      node.right = this.#deleteRecursive(node.right, node.data);
    }
    return node;
  }

  #findMinNode(node) {
    while (node.left) {
      node = node.left; // Go left until null
    }
    return node;
  }

  // 🎯 Inorder Traversal (Left → Root → Right)
  inorder() {
    this.#inorderRecursive(this.root);
    console.log();
  }

  #inorderRecursive(node) {
    if (node) {
      this.#inorderRecursive(node.left);
      process.stdout.write(node.data + " ");
      this.#inorderRecursive(node.right);
    }
  }

  // 🎯 Preorder Traversal (Root → Left → Right)
  preorder() {
    this.#preorderRecursive(this.root);
    console.log();
  }

  #preorderRecursive(node) {
    if (node) {
      process.stdout.write(node.data + " ");
      this.#preorderRecursive(node.left);
      this.#preorderRecursive(node.right);
    }
  }

  // 🎯 Postorder Traversal (Left → Right → Root)
  postorder() {
    this.#postorderRecursive(this.root);
    console.log();
  }

  #postorderRecursive(node) {
    if (node) {
      this.#postorderRecursive(node.left);
      this.#postorderRecursive(node.right);
      process.stdout.write(node.data + " ");
    }
  }
}

const bst = new BinarySearchTree();

// 🎯 Insert Elements
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// 🎯 Search Element
console.log("Search 40:", bst.search(40) ? "Found" : "Not Found");
console.log("Search 100:", bst.search(100) ? "Found" : "Not Found");

// 🎯 Find Min & Max
console.log("Min Value:", bst.findMin());
console.log("Max Value:", bst.findMax());

// 🎯 Traversals
console.log("Inorder Traversal:");
bst.inorder();
console.log("Preorder Traversal:");
bst.preorder();
console.log("Postorder Traversal:");
bst.postorder();

// 🎯 Delete a Node
bst.delete(50);
console.log("Inorder After Deleting 50:");
bst.inorder();
