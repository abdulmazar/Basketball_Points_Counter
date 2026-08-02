let redPoint = bluePoint = totalRed = totalBlue = 0;

let totalRedPoints = document.getElementById("totalRedPoints");
let redPrePoint = document.getElementById("redTeamPoints");
let redPointDisplay = document.getElementById("red-points");

let totalBluePoints = document.getElementById("totalBluePoints");
let bluePrePoint = document.getElementById("blueTeamPoints");
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
  totalRed += redPoint;
  totalBlue += bluePoint;
  totalRedPoints.textContent = totalRed;
  totalBluePoints.textContent = totalBlue;
  redPoint = bluePoint = 0;
  redPointDisplay.textContent = bluePointDisplay.textContent = 0;
}
