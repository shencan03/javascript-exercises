const removeFromArray = function(arr, ...otherArgs) {
  for(const arg of otherArgs){
    for(;;){
      const argIndex = arr.indexOf(arg)
      if(argIndex != -1){
        arr.splice(argIndex, 1)
      } else
          break
    }
  }
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
