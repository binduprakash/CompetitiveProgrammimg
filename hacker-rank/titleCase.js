"use strict";

/* Question 05

Capital case is a specific method of capitalizing the characters of every word in a sentence in order to make it
usable as a title or headline. Construct the body of the function called titleCase() that takes a string as the single parameter.

Examples:

- titleCase("this is an example") returns "This Is An Example"
- titleCase("test") returns "Test"
- titleCase("i r cool") returns "I R Cool"
- titleCase("WHAT HAPPENS HERE") returns "What Happens Here"
- titleCase("") returns ""
- titleCase("A") returns "A"

*/

function titleCase(text) {
  if(text === ""){
    return "";
  }
  let words = text.split(' ');
  let returnWords = [];
  for(let i = 0; i < words.length; i++){
    let word = words[i].split('');
    word[0] = word[0].toUpperCase();
    for(let j = 1; j < word.length; j++){
      word[j] = word[j].toLowerCase();
    }
    returnWords.push(word.join(''));
  }
  return returnWords.join(' ');
}
// Don't change below:

module.exports = { titleCase };
