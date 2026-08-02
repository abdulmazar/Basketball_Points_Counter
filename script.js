let redPoint = bluePoint = totalRed = totalBlue = 0;

let totalRedPoints = document.getElementById("totalRedPoints");
let redPrePoint = document.getElementById("redTeamPoints");
let redPointDisplay = document.getElementById("red-points");

let totalBluePoints = document.getElementById("totalBluePoints");
let bluePrePoint = document.getElementById("blueTeamPoints");
let bluePointDisplay = document.getElementById("blue-points");

let team1 = document.getElementById("team1");
let team2 = document.getElementById("team2");

function inputTeamNames() {
  team1.textContent = prompt("Enter Team Red Name");
  team2.textContent = prompt("Enter Team Blue Name");
}

inputTeamNames();

function addRedPoint() {
  redPoint++;
  redPointDisplay.textContent = redPoint;
}
function addBluePoint() {
  bluePoint++;
  bluePointDisplay.textContent = bluePoint;
}

function savePoint() {
  redPrePoint.textContent += " - " + redPoint;
  bluePrePoint.textContent += " - " + bluePoint;
  totalRed += redPoint;
  totalBlue += bluePoint;
  totalRedPoints.textContent = totalRed;
  totalBluePoints.textContent = totalBlue;
  redPoint = bluePoint = 0;
  redPointDisplay.textContent = bluePointDisplay.textContent = 0;
}

function endGame(){
  if(totalRed > totalBlue){
    alert(team1.textContent + " Wins! " + " With the Lead Of " + (totalRed-totalBlue) + " Points from " + team2.textContent);
  } else if(totalBlue > totalRed){
    alert(team2.textContent + " Wins!" + " With the Lead Of " + (totalBlue-totalRed) + " Points from " + team1.textContent);
  } else {
    alert("It's a tie!");
  }
  redPoint = bluePoint = 0 = totalRed = totalBlue = 0;
  redPointDisplay.textContent = bluePointDisplay.textContent = totalRedPoints.textContent = totalBluePoints.textContent = 0;
  redPrePoint.textContent = bluePrePoint.textContent = "";

  let userAgreed = confirm("Do you want to change the team names?");
  if(userAgreed){
    inputTeamNames();
  } 

}