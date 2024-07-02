const add = function(n1, n2) {
	return n1+n2;
};

const subtract = function(n1, n2) {
	return n1-n2;
};

const sum = function(arr) {
	return arr.reduce((product, current)=>product+current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current)=>product*current);
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function (n) {
  if(n===0)
    return 1;
  let product=1;
  for(let i=n;i>0;i--) {
    product*=i;
  }
  return product;
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
