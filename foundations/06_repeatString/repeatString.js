const repeatString = function(s, num) {
  if(num < 0){
    return "ERROR"

  } else if(num === 0){
    return ""

  } else{
    let word = s
    for(let i = 1; i < num; i++)
      word += s
    
    return word
  }
};

// Do not edit below this line
module.exports = repeatString;
