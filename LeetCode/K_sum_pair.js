//I/p:- [2,3,0,1,5] , k=4
// o/p:-2  [2,1] [3,1]

function kSumPair(nums, k) {
  //sorting nums array in increasing order
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let operation = 0;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === k) {
      operation++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return operation;
}

console.log(kSumPair([2, 3, 0, 1, 5], 1));
