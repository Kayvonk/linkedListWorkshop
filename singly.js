// // Singly Linked List

class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
  }

  add(val) {
    let newNode = new LinkNode(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
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
      result += " -> ";
      result += currentNode.value;
      currentNode = currentNode.next;
    }
    console.log(result);
  }
}

let list = new SinglyLinkedList();

list.add(2);
list.add(5);
list.add(7);

// list.printPretty()
// console.log(list.getLength());