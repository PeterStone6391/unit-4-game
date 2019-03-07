// var targetNumber = 0;
// var playerScore = 0;
// // var wins = 0;
// // var losses = 0;
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// $(document).ready(function() {
//   $(".crystal").on("click", function() {
//     //   console.log("click");
//     var crystalValue = $(this).val();
//     // console.log(crystalValue);
//     playerScore = playerScore + parseInt(crystalValue);
//     showPlayerScore();
//     console.log(playerScore);
//   });
//   function showTargetNumber() {
//     targetNumber = getRandomInt(19, 120);
//     // console.log(targetNumber);
//     $("#targetScore").text(targetNumber);
//   }
//   showTargetNumber();
//   function getCrystalValues() {
//     $("input").each(function() {
//       var randomNum = getRandomInt(1, 12);
//       $(this).attr("value", randomNum);
//     });
//   }
//   getCrystalValues();
//   function showPlayerScore() {
//     $("#yourScore").text(playerScore);
//   }

//   // }); would like to go over the above code and try and finish the project in the clearly shorter and more clean way

$(document).ready(function() {
  //variables
  var counter = 0;
  var wins = 0;
  var losses = 0;

  // reused the function Michael helped me with in tutoring but wrote it long way to help me see the flow better
  function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var targetNumber = randomNum(19, 120);
  $("#targetScore").html(targetNumber);
  // wrote out simple way so that i can understand it better
  var redChaos = randomNum(1, 12);
  var blueChaos = randomNum(1, 12);
  var greenChaos = randomNum(1, 12);
  var yellowChaos = randomNum(1, 12);

  //reset function of the above function so that it resets each game
  function reset() {
    counter = 0;
    $("#targetScore").html(targetNumber);
    targetNumber = randomNum(19, 120);
    $("#yourScore").text(counter);
    redChaos = randomNum(1, 12);
    blueChaos = randomNum(1, 12);
    greenChaos = randomNum(1, 12);
    yellowChaos = randomNum(1, 12);
  }

  $("#red").on("click", function() {
    counter += redChaos;
    WinLose();
    $(yourScore).text(counter);
  });

  $("#blue").on("click", function() {
    counter += blueChaos;
    WinLose();
    $(yourScore).text(counter);
  });

  $("#green").on("click", function() {
    counter += greenChaos;
    WinLose();
    $(yourScore).text(counter);
  });

  $("#yellow").on("click", function() {
    counter += yellowChaos;
    WinLose();
    $(yourScore).text(counter);
  });
  // if and else for results. also making changes to the win lose areas
  //would also like to learn how to add a sound win they win or lose to go with the alert // like when sonic collects coins or when he losses all the coins and loses a life in the video game
  function WinLose() {
    if (counter === targetNumber) {
      wins += 1;
      alert("You Won! The Chaos Emeralds are yours!");
      $(win).text(wins);
      reset();
    } else if (counter > targetNumber) {
      losses += 1;
      alert("NOOOOOO DR. EGGMAN DEFEATED YOU!");
      $(lose).text(losses);
      reset();
    }
  }
});
