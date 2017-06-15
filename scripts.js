console.log("js sourced");

//Programming and Logic Challenges

//1. function that takes two arguments and return the value of the results for
//multiplication
var multiply = function(x, y) {
  return x*y;
};
console.log(multiply(3, 5));

// 2. function that takes an array of numbers as an argument and returns the sum
// of all values in the array.

//use a for loop to go through the array and add each number to the total as it
//goes through the loop
var array = [2,3,4];
function total(arrayTotal) {
  var add = 0;
  for (i = 0; i < arrayTotal.length; i++) {
  add += arrayTotal[i];
  }
}
console.log(total(array));

// 3. Write a funtion that take an array of strings as a parameter and uses a loop
//to determin if the array contains the string 'blue'. The function should return
//true or false depending on whether the array contains 'blue'

//using a loop to go through the array to if the array contains the color "blue"
var colorsArray = ['red','green'];

function containsBlue(array) {
  for (i=0; i < array.length; i++) {
    if (array[i].color == 'blue') {
      return true;
    } else {
      return false;
    }
  }
}
console.log(containsBlue(colorsArray));

// 4. Write a function that takes in two strings, color and animal, and returns
// a string "The 'animal' is 'color' ".

var color = "grey";
var animal = "cat";

function returnString(animal, color) {
  return ("The " + animal + " is " + color + ".");
}
console.log(returnString(animal, color));



//getting document ready using jquery
$(document).ready(function() {
  (console.log('in ready function'));




});
