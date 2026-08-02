let redPoint = 0;
let bluePoint = 0;
let redPrePoint = document.getElementById("redTeamPoints");
let bluePrePoint = document.getElementById("blueTeamPoints");
let redPointDisplay = document.getElementById("red-points");
let bluePointDisplay = document.getElementById("blue-points");

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
  redPoint = bluePoint = 0;
  redPointDisplay.textContent = bluePointDisplay.textContent = 0;
}
