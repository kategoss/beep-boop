// business logic

var zero = "Beep!";
var one = "Boop!";
var divByThree= "I'm sorry, Dave. I'm afraid I can't do that.";
var result = [];

// var num = ('#userInput');
// num.toString().indexOf('0')
// return zero;

var ifContainsZero = function() {
  beep.forEach(function(beep) {

    (userInput).indexOf('0')
});
}

// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($('#userInput').val());

    if (number > 0) {
      $("#errorDisplay").text("Please enter a positive number.");
     console.log(number);
   } else {
     return number;
   }


  $("#errorDisplay").text("");
  $("#result").text("");
  });
});
