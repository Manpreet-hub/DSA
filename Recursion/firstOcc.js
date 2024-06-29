//first approach
function findFirstOcc(arr, key, currentIndex) {
  while (currentIndex < arr.length) {
    if (arr[currentIndex] === key) return currentIndex;
    currentIndex++;
  }
  return -1;
}

console.log(findFirstOcc([3, 4, 1, 8, 7], 8, 0));

//second approach
function findFirstOccurance(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
}
console.log(findFirstOccurance([3, 4, 1, 8, 7], 2));

//Recursive approach
function recursiveFirstOcc(arr, key, currentIndex) {
  if (arr.length === currentIndex) {
    return -1;
  }
  if (arr[currentIndex] === key) {
    return currentIndex;
  }
  return recursiveFirstOcc(arr, key, currentIndex + 1);
}

console.log(recursiveFirstOcc([3, 4, 1, 8, 7], 8, 0));
