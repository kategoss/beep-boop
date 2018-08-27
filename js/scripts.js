// // business logic



var containsZero = "0";
var containsOne = "1";
var divByThree = "3";

var containsZeroResult;
var containsOneResult;
var containsDivByThreeResult;

var ifContainsZero = function(zero) {
  containsZeros.forEach(function(containsZero) {
    if (containsZero === 0) {
      containsZeroResult = true;
    }
  });
}

var ifContainsOne = function(one) {
  containsOnes.forEach(function(containsOne) {
    if (containsOne === 1) {
      containsOneResult = true;
    }
  });
}

var ifDivByThree = function(three) {
  containsDivByThree.forEach(function(containsOne) {
    if (divByThree % 3 === 0) {
      containsDivByThreeResult = true;
    }
  });
}

// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($('#userInput').val());
    var sortNumber = inputNumber.split(" ");
    var newNumber = [];

    sortNumbers.forEach(function(sortNumber) {
      containsZeroResult = undefined;
      ifContainsZero(sortNumber [0]);
    });

    for (var index = 0; index <= inputNumber; index ++) {
      newNumber.push(" " + index);
    }

    if (inputNumber < 0) {
       alert ("Please enter a positive number.");
    } else if (sortNumber.includes("0")) {
      newNumber.push("Beep!");
    } else if (sortNumber.includes("1")) {
      neNumber.push("Boop!");
    } else if (inputNumber % 3 === 0) {
      newNumber.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      newNumber.push(inputNumber);
    }


  $("#result").text(newNumber);
  });
});




// ----------------------------------------
// previous logic

//  if (inputNumber < 0) {
//    alert ("Please enter a positive number.");
// } else if (inputNumber === 0) {
//    newNumber.push("Beep!");
// } else if (inputNumber.includes("1") {
//    newNumber.push("Boop!");
// } else if (inputNumber % 3 === 0) {
//    newNumber.push("I'm sorry, Dave. I'm afraid I can't do that.");
// } else {
//    newNumber.push(inputNumber);
// }

// var num = [1, 2, 3]
// var containsZeros = num.includes(0);
// var containsOne = num.includes(1);
// var divByThree = (num / 3 === 0);
//
//     return true;
// } else if (num === 1) {
//   return containsOne;
// } else if (num % 3 === 0) {
//   return divByThree;
// }
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

// var containsZero = "0"
// var beep = "Beep!"
// var replaceZero = []
//
// replaceZero = beep.replace(/[0]/g);
// replaceZero.push(beep);

// var containsZero = inputNumber.replace(/0/g, 'Boop!');
//
//
// var zeros = function(zero) {
//   if (num.includes(0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var containsZeros = containsZeros.replace(/0/g, 'Beep!');
