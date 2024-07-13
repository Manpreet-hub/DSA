function pivotIndex(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([2, 11, 4, 2, 1]));
