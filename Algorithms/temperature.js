// Convert Celsius to Fahrenheit

// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// let convertCtoF = (celsius) => {
//     let fahrenheit;
//     return fahrenheit = celsius * 9 / 5 + 32;
// }
// let result = convertCtoF(0);
// console.log(result)


// Celsius to Fahrenheit: (C x 9/5) + 32 = F
// Fahrenheit to Celsius: (F - 32) x 5/9 = C

function temperatureConverter(value, type) {
    if (type === 'Celsius') {
      return (value * 9/5) + 32; //convert Celsius to Fahrenheit
    } else if (type === 'Fahrenheit') {
      return (value - 32) * 5/9; //convert Fahrenheit to Celsius
    } else {
      return 'Invalid temperature type'; //handle invalid input
    }
  }

  let output = temperatureConverter(32, 'Celsius')
  console.log(output)