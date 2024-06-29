function removeSpaces(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "\t") result += str[i];
  }
  return result;
}
console.log(removeSpaces("Hello My Name is  l"));
