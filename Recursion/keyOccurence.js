function findKeyOcc(arr, key) {
  let keyCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) keyCount++;
  }
  if (keyCount > 0) {
    return keyCount;
  } else {
    return -1;
  }
}
console.log(findKeyOcc([1, 4, 2, 5, 22, 2, 3, 2, 2], 9));
