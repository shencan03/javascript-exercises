const reverseString = function(s) {
  let s_reversed = []
  for(let i = -1; i >= -(s.length); i--){
    s_reversed.push(s.at(i)) 
  }

  return s_reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
