const add = function(num1, num2) {
  return num1 + num2	
};

const subtract = function(num1, num2) {
  return num1 - num2	
};

const sum = function(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++)
    sum += arr[i]
  return sum
};

const multiply = function(arr) {
  let result = 1
  for (let i = 0; i < arr.length; i++)
    result *= arr[i]
  return result
};

const power = function(num1, num2) {
  const numOneCopy = num1
  for (let i = 0; i < num2 - 1; i++)	
    num1 *= numOneCopy

  return num1
};

const factorial = function(num) {
  let result = 1
  for (let i = 1; i <= num; i++)
    result *= i

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
