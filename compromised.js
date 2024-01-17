/*
  You are given an array (length >= 3, could be very large) containing integers.
  The array is either entirely odd integers or entirely even integers except for a single integer N.
  
  Write a method that takes the array as an argument and returns this 'outlier' N.
*/

function isEven(n) {
  return n % 2 == 0;
}

const findCompromised = (arr) => {
  // implement your solution here
  //is arr even or odd
  var first = isEven(arr[0])
  var second = isEven(arr[0])
  var third = isEven(arr[0])

  var even_count = 0;
  if_array_even = false;
  var even_arr = [];
  var odd_arr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (isEven(element))
    {
      even_arr.push(element)
    }
    else {
      odd_arr.push(element)
    }
    
    if (index == 2){
      if (even_arr.length == 1){
        return even_arr[0]
      }
      else if (even_arr.length == 2){
        return odd_arr[0]
      }
      else if (even_arr == 3){
        if_array_even = true;
      }
    }
  }

  return 1
}

console.log(findCompromised([2, 4, 0, 100, 4, 11, 2602, 36, 22, 2, 4, 10, -20, -10300])) // expected result - 11 (the only odd number)
console.log(findCompromised([160, 3, 1719, 19, 11, 13, -21, -1, 20001])) // expected result - 160 (the only even number)
