//Input:- word1="abc" word2="pqr"
//Output:- apbqcr

function mergedAlternately(word1, word2) {
  let merged = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    merged += word1[i];
    merged += word2[j];
    i++;
    j++;
  }

  //add remaining letters of word1
  while (i < word1.length) {
    merged += word1[i];
    i++;
  }

  //add reamining letters of word2
  while (j < word2.length) {
    merged += word2[j];
    j++;
  }
  return merged;
}

console.log(mergedAlternately("abcdef", "pqr"));
