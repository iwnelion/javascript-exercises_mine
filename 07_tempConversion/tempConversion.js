const convertToCelsius = function(f) {
  let cel=(f-32)*5/9;
  let rCel=Math.round(cel*10)/10;
  return rCel;
};

const convertToFahrenheit = function(c) {
  let far=c*9/5+32;
  let rFar=Math.round(far*10)/10;
  return rFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
