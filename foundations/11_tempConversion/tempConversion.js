const convertToCelsius = function(temperature) {
  celsius = Math.round((5 / 9 * (temperature - 32)) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  fahrenheit = Math.round((9 / 5 * temperature + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
