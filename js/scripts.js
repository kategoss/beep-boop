// // business logic
//
// var num = parseInt($("#userInput"));
// var result = [];
// var containsZeros = "0"
//
// var containsZeros = num.indexOf("0");
// var containsOne = num.indexOf("1");
// var divByThree = (num / 3 === 0);
//
//
// var containsZeros = function(containsZero) {
//   if (num === "0") {
//     return true;
//   }
// }

// } else if (num === "1") {
//   return containsOne;
// } else (num % 3 === "0") {
//   return divByThree;
// }
//   var final = [num]
//   finals.push(final);
// }
// var ifContainsZero = function(zeroNumber) {
//   num.forEach(function(num) {
// //
//   containsZeros.forEach(function(containsZero) {
//     if (num === containsZero) {
//       return true;
//     } else if (num === containsOne) {
//       return true;
//     } else if (num % 3 === 0) {
//       return true;
//     }
//   });

//   if (num === "ifContainsZero")
// var num = ('#userInput');
// num.toString().indexOf('0')
// return zero;



// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($('#userInput').val());
    var newNumber = [];

    if (number < "0") {
      alert ("Please enter a positive number.");
   } else if (number === "0") {
      newNumber.push("Beep!");
      console.log(newNumber);
   } else if (number === "1") {
      newNumber.push("Boop!");
   } else if (number % 3 === "0") {
      newNumber.push("I'm sorry, Dave. I'm afraid I can't do that.");
   } else {
      newNumber.push(number);
   }

    for (var index = 0; index <= number; index ++) {
     newNumber.push(" " + index);
    }

  $("#result").text(newNumber);
  });
});
