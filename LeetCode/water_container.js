function maxWater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let currentHeight = Math.min(height[left], height[right]);
    let currentWidth = right - left;
    let currentArea = currentHeight * currentWidth;

    maxWater = Math.max(maxWater, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
}
