function checkLength(str) {
  let result = "";
  for (char of str) {
    result++;
  }
  return result;
}

console.log(checkLength("Hello"));

//recursive

function recursiveCheckLength(str) {
  if (str === "") {
    return 0;
  }
  return 1 + recursiveCheckLength(str.substring(1));
}
console.log(recursiveCheckLength("Hello"));
