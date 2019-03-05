var targetNumber = 0;
var playerScore = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).ready(function() {
  $(".crystal").on("click", function() {
    //   console.log("click");
    var crystalValue = $(this).val();
    // console.log(crystalValue);
    playerScore = playerScore + parseInt(crystalValue);
    showPlayerScore();
    console.log(playerScore);
  });
  function showTargetNumber() {
    targetNumber = getRandomInt(19, 120);
    // console.log(targetNumber);
    $("#targetScore").text(targetNumber);
  }
  showTargetNumber();
  function getCrystalValues() {
    $("input").each(function() {
      var randomNum = getRandomInt(1, 12);
      $(this).attr("value", randomNum);
    });
  }
  getCrystalValues();
  function showPlayerScore() {
    $("#yourScore").text(playerScore);
  }
});
