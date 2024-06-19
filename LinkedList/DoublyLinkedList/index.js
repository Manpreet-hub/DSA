class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

//Insert at beginning
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);
  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};

//Insert at end
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};

//delete first node
DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  if (this.head === this.tail) {
    this.head = nullthis.tail = null;
    // this.head = this.tail = null;
  } else {
    this.head.next = this.head;
    this.head.prev = null;
  }
};

//delete last node
DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) return;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};
