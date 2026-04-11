const palindromes = function (word) {
  const alnum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  word = word.toLowerCase().split("").filter((s) => alnum.includes(s)).join("")

  let indexHead = 0
  for(let i = word.length - 1; 0 <= i && i != indexHead ; i--){
    if(word[indexHead] != word[i])
      return false
    indexHead++
  }

  return true
};

module.exports = palindromes;
