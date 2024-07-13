function largestAltitude(gain) {
  let currentAltitude = 0,
    maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i]; //2 . 5,  6,10   //-5,-4,1,1,-6
    maxAltitude = Math.max(currentAltitude, maxAltitude); //2  5,6,10   //0,0,1,1,1
  }
  return maxAltitude;
}

console.log(largestAltitude([2, 3, 1, 4]));
console.log(largestAltitude([-5, 1, 5, 0, -7]));
