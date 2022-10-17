const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    if (!this.data) return null;
    return this.data;
  }

  add(data) {
    let newData = new Node(data);
    if (this.data === null) {
        this.data = newData;
    } else {
      addData(this.data, newData);
    }

    function addData(node, newData) {
        if (newData < node) {
          if (node.left === null) {
            node.left = newData;
          } else {
            addData(node.left, newData);
          }
        } else if (newData > node) {
          if (node.right === null) {
            node.right = newData;
          } else {
            addData(node.right, newData);
          }
        }
    }
  }

  has(data) {
    if (this.data === null) {
      return false;
    } else if (data < this.data) {
      return this.has(this.left, data);
    } else if (data > this.data) {
      return this.has(this.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    if (this.data === null) {
      return null;
    } else if (data < this.data) {
      return this.find(this.left, data);
    } else if (data > this.data) {
      return this.find(this.right, data);
    } else {
      return this.data;
    }
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};