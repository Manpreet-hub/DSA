function isVowel(character) {
  let vowels = "aeiou";
  if (vowels.indexOf(character.toLowerCase()) !== -1) return true;
  return false;
}
function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) count++;
  }
  if (count === 0) {
    console.log("No vowels exists");
  } else return count;
}

console.log(vowelCount("aeiou"));

//Recursion Approach
function recursiveVowelCount(str, strLength) {
  if (strLength === 1) {
    return Number(isVowel(str[0]));
  }

  return recursiveVowelCount(str, strLength - 1) + isVowel(str[strLength - 1]);
}
console.log(recursiveVowelCount("Hello", 5));
