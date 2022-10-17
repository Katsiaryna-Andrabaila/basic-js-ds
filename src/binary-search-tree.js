const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    if (!this.data) return null;
    return this.data[0];
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.data) {
        this.data = newNode;
    } else {
        if (newNode < this.data) {
          if (!this.left) {
            this.left = newNode;
          } else {
            this.left.add(newNode);
          }
        } else {
          if (this.right === null) {
            this.right = newNode;
          } else {
            this.right.add(newNode);
          }
        }
    }
  }

  has(data) {
    
  }

  find(data) {
    
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