//I/P:- Hello
//O/P:- Holle

function reverseVowels(str) {
  //using split method for converting in array from strings
  const character = str.split("");
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    //index of -1 return when it didn't match any characters
    while (left < right && vowels.indexOf(character[left]) === -1) {
      left++;
    }
    while (left < right && vowels.indexOf(character[right]) === -1) {
      right--;
    }

    //when it found vowels
    while (left < right) {
      let temp = character[left];
      character[left] = character[right];
      character[right] = temp;

      left++;
      right--;
    }
  }
  return character.join("");
}

console.log(reverseVowels("Hello"));
