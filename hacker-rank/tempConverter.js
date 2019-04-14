"use strict";

/* Question 00

Write a converter that will change Celsius to Fahrenheit and back again.

Your function should take in a number, and a boolean. The number will be the temperature in degrees,
and the boolean will be whether to convert from C to F (true) or F to C (false).
Your answer should be rounded to one decimal place, and returned as a Number, not a string.

Examples:

- tempConverter(32, true) returns 89.6 as a result
- tempConverter(32, false) returns 0.0 as a result
- tempConverter(98.6, false) returns 37 as a result
- tempConverter("12", <anything>) returns NaN as a result

*/

function tempConverter(value, cToF) {

  /* IMPLEMENT ME */
  if((cToF === true) || (cToF === false)){
    if(typeof value === 'string'){
      return NaN;
    }
  }
  if(cToF === true) {
    let Fahrenheit = ((value * 9 / 5) + 32);
    return (Math.ceil(Fahrenheit * 10) / 10 );
  }
  if(cToF === false) {
    let Celsius = ((value - 32) * 5 / 9);
    return (Math.ceil(Celsius * 10) / 10 );
  }
}
// Don't change below:

module.exports = { tempConverter };
