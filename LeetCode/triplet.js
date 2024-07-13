//I/P:- [2,1,5,6,4,6]
//true [1,5,6]

function increasingTriplet(nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([5, 4, 0, 12, 15]));
