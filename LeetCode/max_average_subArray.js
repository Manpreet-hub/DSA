function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]; //6-1+4 =9,
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum / k;
}

console.log(findMaxAverage([1, 22, 3, 4], 2));
