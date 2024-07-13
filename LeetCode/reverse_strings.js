//I/P:- The sky is blue
//O/P:- Blue is sky The

function reverseWords(str) {
  let result = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i]; //it will have last word value but it can't move to another condition because i reaches its last index
    } else if (word.length > 0) {
      result.unshift(word);
      word = "";
    }
  }
  if (word.length > 0) {
    //for handling last word
    result.unshift(word);
  }
  return result.join(" ");
}

console.log(reverseWords("The sky is blue"));

//Another approach
// O/p:- t i   o d   n a c   e W

function reverseWord(str) {
  let words = str.split("");
  let reverse = words.reverse();
  let reverseString = reverse.join(" ");
  return reverseString;
}

console.log(reverseWord("We can do it"));
