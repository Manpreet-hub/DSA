function reverseStr(str) {
  let strLength = str.length - 1;
  let result = "";
  while (strLength >= 0) {
    result = result + str[strLength];
    strLength--;
  }
  return result;
}

// console.log(reverseStr("Hello"));

//recursion
function recursiveReverse(str) {
  if (str === "") return str;

  return (
    str[str.length - 1] + recursiveReverse(str.substring(0, str.length - 1))
  );
}

console.log(recursiveReverse("Hello"));
