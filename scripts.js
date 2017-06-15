console.log("js sourced");

//getting document ready using jquery
$(document).ready(function() {

  (console.log('in ready function'));
  $(".welcome").text("The page has loaded.");
  $('#submit-btn').on('click', buttonClick);

  function buttonClick() {
      $(".welcome").text("Button clicked");
  }

});


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
//the code as it doesn't currently work.

// var array = [2,3,4];
// function total(arrayTotal) {
//   var add = 0; //to define add
//   for (i = 0; i < arrayTotal.length; i++) {
//   add += arrayTotal[i];
//   }
// }
// console.log(total(array));

//using resources, I found this code from w3resources.
function sum(input) {
  if (toString.call(input) !== '[object Array]')
  return false;
    var total = 0;
    for (var i=0; i<input.length; i++) {
      if(isNaN(input[i])) {
        continue;
      }
    total += Number(input[i]);
    }
    return total;
}
console.log(sum([1,2,3]));



// 3. Write a funtion that take an array of strings as a parameter and uses a loop
//to determin if the array contains the string 'blue'. The function should return
//true or false depending on whether the array contains 'blue'

//using a loop to go through the array to if the array contains the color "blue"

var colorsArray = ['red','blue','green'];

function containsBlue(array) {
  for (i=0; i < array.length; i++) {
    if (array.includes('blue')) {
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

// 5. function that take in two strings, make and model, and returns an object
// that has the propeties make and model.

function car() {

  var car1 = {
    make: "Ford",
    model: "Taurus"
  };
  return car1;
}
console.log(car());
