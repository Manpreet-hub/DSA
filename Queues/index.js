//Queue
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    return this.queue.push(data);
  }

  //remove 1st element
  deQueue() {
    if (this.isEmpty()) {
      console.log("No element to deQueue");
      return;
    }
    return this.queue.shift();
  }

  contains(ele) {
    return this.queue.includes(ele);
  }

  size() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    if (this.queue.length === 0) {
      console.log("Queue is empty ");
      return true;
    }
    return false;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
myQueue.deQueue();

console.log(myQueue.printQueue());
console.log(myQueue.peek());
