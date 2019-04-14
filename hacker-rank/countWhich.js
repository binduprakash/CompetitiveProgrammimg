"use strict";

/* Question 02

Implement a function called countWhich() which will take in a list of items and a callback,
and it will return the number of elements which return a truthy value from the callback function.

Examples:

- countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); }) returns 1
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; }) returns 1
- countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; }) returns 0
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; }) returns 2
- countWhich([], function(x) { return x > 10 }) returns 0
- countWhich("This should fail", function(word) { return /i/.test(word); }) returns false

*/

function countWhich(list, cb){
  if(typeof list === "string"){
    return false;
  }
  let count = 0;
  for(let i = 0; i < list.length; i++){
    if(cb(list[i])){
      count++;
    }
  }
  return count;
}
// Don't change below:

module.exports = { countWhich };
