//Input:- [1,0,0,0,1] n=1
//Output:- true

function canPlaceFlowers(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
      let isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) {
          return true;
        }
      }
    }
  }
  return count >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
