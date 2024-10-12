const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((total, currentValue) => total + currentValue,0);
	
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => total * currentValue,1);
};

const power = function(a,n) {
  return a**n;
	
};

const factorial = function facto(a) {
  if (a === 0 || a === 1)
    return 1;

  let res = 1;
  res = a * facto(a-1)
  return res;
	
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
