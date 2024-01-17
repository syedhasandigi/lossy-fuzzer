/*
  Implement a solution that returns the middle character(s) of a string.
  
  - If the string's length is even, return the middle 2 characters.
  - If the string's length is 1, return itself.
*/

function extractMiddle(str) {

  var position;
  var length;

  if(str.length % 2 == 1) {
      position = str.length / 2;
      length = 1;
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }

  return str.substring(position, position + length)
}

function isEven(n) {
  return n % 2 == 0;
}

export const getMiddle = (str) => {
  // implement your solution here
  var string_length = str.length
  if (string_length == 1){return str;}
  if (isEven(string_length)){
    //get middle two charachters
    var position = str.length / 2 - 1;
    return str.substring(position, position + 2)
  }
  else{
    var position = str.length / 2;
    return str.substring(position, position + 1)
  }
}

console.log(getMiddle('test')) // expected result - 'es'
console.log(getMiddle('testing')) // expected result - 't'
console.log(getMiddle('middle')) // expected result - 'dd'
console.log(getMiddle('A')) // expected result - 'A'
