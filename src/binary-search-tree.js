const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;

  }

  root() {
    return this.value;
  }

  add(data) {
    const newData = new Node(data);
    if (!this.value) {
        this.value = newData;
        return;
    }

    let current = this.value;

    while (current) {
      if (current.data === newData.data) return;
      if (newData.data < current.data) {
        if (!current.left) {
          current.left = newData;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newData;
          return;
        } else {
        current = current.right;
        }
      }
    }
      
    /*addData(current, newData);

    function addData(node, val) {
      let newVal = new Node(val);
      if (node.value === newVal.value) return;
        if (newVal.value < node.value) {
          if (!node.left) {
            node.left = newVal;
          } else {
            addData(node.left, val);
          }
        } else if (newVal.value > node.value) {
          if (!node.right) {
            node.right = newVal;
          } else {
            addData(node.right, val);
          }
        }
    }*/
  }

  has(data) {
   return hasData(this.value, data);
    
    function hasData(node, data) {
      if (!node) return false;
      if (data === node.value) return true;
      if (node.value > data) {
          return hasData(node.left, data);
      } else {
          return hasData(node.right, data);
        }
    }
  }

  find(data) {
    return findData(this.data, data);

    function findData(node, data) {
      if (!node) return null;
      if (data === node.data) return node;
      if (node.data > data) {
        return hasData(node.left, data);
      } else if (node.data < data) {
        return hasData(node.right, data);
      }
      return null;
    }
  }

  remove(data) {
    
  }

  min() {
    if (!this.value) return null;
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.min();
    } 
  }

  max() {
    return findMax(this.value);
    function findMax(node) {
      if (!node) return null;
      if (!node.right) {
        return node.value;
      } else {
        return findMax(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};