//'ace', is a subsequence of 'abcde' while 'aec' is not.

function isSubsequence(s, t) {
  //s-> subsequence string, t-> whole string

  let sIndex = 0;

  for (const char of t) {
    if (sIndex === s.length) break;
    if (s[sIndex] === char) sIndex++;
  }

  return sIndex === s.length;
}

console.log(isSubsequence("adf", "abcde"));
