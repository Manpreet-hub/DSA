function sumOfNNumber(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNNumber(3));

//recursive approach

function recursiveSumOfNnumber(n) {
  if (n == 0) return 0;

  return n + recursiveSumOfNnumber(n - 1);
}

console.log(recursiveSumOfNnumber(5));
