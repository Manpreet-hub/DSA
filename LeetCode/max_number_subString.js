//I/P:- abciiidef
// O/P:-3        [iii]

function maxVowels(s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let currentVowelCount = 0,
    maxVowelsCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currentVowelCount++;
  }
  maxVowelsCount = currentVowelCount;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) currentVowelCount++;
    if (vowels.has(s[i - k])) currentVowelCount--;

    maxVowelsCount = Math.max(currentVowelCount, maxVowelsCount);
  }
  return maxVowelsCount;
}

console.log(maxVowels("abccdeef", 3));
