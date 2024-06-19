class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

//Node insert at beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

//Node insert at end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
  }
  let last = this.head;

  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

//insert at given node
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("PrevNode cann't be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

//delete first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

//delete last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    //nothing to delete
    return;
  }
  if (!this.head.next) {
    //if there is one node
    this.head = null;
    return;
  }

  let secondLast = this.head;
  //checking second last node
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

//delete node with given key
LinkedList.prototype.deleteByKey = function (key) {
  if (!this.head) {
    return;
  }
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (current.next) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("No node found with given key");
};

//search
LinkedList.prototype.search = function (key) {
  if (!this.head) {
    return;
  }
  if (this.head.data === key) {
    return true;
  }
  let current = this.head;

  while (current) {
    if (current.data === key) {
      console.log("Key found");
      return true;
    }
    current = current.next;
  }
  return false;
};

//traversal
// LinkedList.prototype.traverse = function () {
//   let current = this.head;
//   let listValues = [];
//   while (current) {
//     listValues.push(current.data);
//     current = current.next;
//   }
//   console.log(listValues.join(" => "));
// };
LinkedList.prototype.traverse = function () {
  let current = this.head;

  let listValues = [];

  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  if (listValues.length === 0) {
    console.log("The list is empty!");
  }
  console.log(listValues.join(" -> "));
};
//usage
const myList = new LinkedList();
myList.insertAtBeginning(2);
myList.insertAtEnd(20);
myList.insertAtEnd(25);
myList.insertAtEnd(30);

myList.insertAfter(myList.head.next, 21);
myList.traverse();
