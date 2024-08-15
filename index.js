// // Singly Linked List

// class LinkNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor(head = null, tail = null) {
//     this.head = head;
//     this.tail = tail;
//   }
//   isEmpty() {
//     if (!this.head) return true;
//     else return false;
//   }

//   getLength() {
//     let count = 0;
//     let node = this.head;
//     while (node) {
//       count++;
//       node = node.next;
//     }
//     return count;
//   }

//   clear() {
//     this.head = null;
//   }

//   add(val) {
//     let newNode = new LinkNode(val);
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   printPretty() {
//     let result = `${this.head.value}`;
//     if (!this.head.next) {
//       return;
//     }
//     let currentNode = this.head.next;
//     while (currentNode) {
//       result += " -> ";
//       result += currentNode.value;
//       currentNode = currentNode.next;
//     }
//     console.log(result);
//   }
// }

// // let node1 = new LinkNode(2);
// // let node2 = new LinkNode(5);
// // node1.next = node2;
// // console.log(node1);

// let list = new SinglyLinkedList();

// list.add(2);
// list.add(5);
// list.add(7);
// // list.head = node1;

// // list.clear()

// // console.log(list);
// list.printPretty()
// console.log(list.getLength());

// Doubly Linked List

class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }
  isEmpty() {
    if (!this.head) return true;
    else return false;
  }

  getLength() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    let newNode = new LinkNode(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  printPretty() {
    let result = `${this.head.value}`;
    if (!this.head.next) {
      return;
    }
    let currentNode = this.head.next;
    while (currentNode) {
      result += " <-> ";
      result += currentNode.value;
      currentNode = currentNode.next;
    }
    console.log(result);
  }
  findByValue(val) {
    let node = this.head;
    while (node) {
      if (node.value === val) {
        return node;
      }
      node = node.next;
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.head === this.tail) {
      this.clear();
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      prevNode = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prevNode;

      currentNode = currentNode.prev;
    }

    // let temp = this.head
    // this.head = this.tail
    // this.tail = temp

    this.tail = this.head;
    this.head = prevNode.prev;

  }
}

// let node1 = new LinkNode(2);
// let node2 = new LinkNode(5);
// node1.next = node2;
// console.log(node1);

let list = new DoublyLinkedList();

list.add(1);
list.add(3);
list.add(5);
list.add(7);
list.add(9);
list.add(11);
// list.head = node1;

// list.clear()

// console.log(list);
list.printPretty();
// console.log(list.getLength());

// console.log(list.findByValue(11));
// list.pop();
list.reverse()

list.printPretty();
// console.log(list.getLength());
