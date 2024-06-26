function fib(value) {
  let n0 = 0;
  let n1 = 1;
  for (let i = 0; i < value; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}
//0 1 1 2 3 5
console.log(fib(1));

//recursive
function recursiveFibonacci(value) {
  if (value === 0 || value === 1) return value;
  return recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2);
}

console.log(recursiveFibonacci(1));
