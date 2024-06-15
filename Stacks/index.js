class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    return this.stack.push(data);
  }
  pop() {
    return this.stack.pop();
  }
  reverse() {
    return this.stack.reverse();
  }
  isEmpty() {
    if (this.stack.length === 0) {
      console.log("Stack is empty");
      return true;
    } else {
      console.log("Stack is not empty");
      return false;
    }
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  lastElement() {
    return this.stack[0];
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(key) {
    return this.stack.includes(key);
  }

  printStack() {
    let result = "";
    for (let i = 0; i < this.stack.length; i++) {
      result += this.stack[i] + "\n";
    }
    return result;
  }
}

const st = new Stack();
st.push(2);
st.push(22);
st.push(24);
st.pop();
console.log(st.printStack());
console.log(st.peek());
console.log(st.contains(21));
