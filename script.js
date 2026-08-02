let redGoal = 0;
let blueGoal = 0;
let redPreGoal = document.getElementById("redTeamGoals");
let bluePreGoal = document.getElementById("blueTeamGoals");
let redGoalDisplay = document.getElementById("red-goals");
let blueGoalDisplay = document.getElementById("blue-goals");
function addRedGoal() {
  redGoal++;
  redGoalDisplay.textContent = redGoal;
}
function addBlueGoal() {
  blueGoal++;
  blueGoalDisplay.textContent = blueGoal;
}

function saveGoal(){
  redPreGoal.textContent += " - " + redGoal ;
  bluePreGoal.textContent += " - " + blueGoal ;
  redGoal = blueGoal = 0;
  redGoalDisplay.textContent = blueGoalDisplay.textContent = 0;

}