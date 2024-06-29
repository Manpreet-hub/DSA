function removeAdjDup(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      result += str[i];
    }
  }
  return result;
}

console.log(removeAdjDup("abddcc"));
