//Iteration approach

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
}

console.log(factorial(5));

//Recursion approach
function fac(n) {
  if (n === 0) {
    return 1;
  }
  return n * fac(n - 1);
}

console.log(fac(5));
