let red = {
  name: document.getElementById("team1"),
  points: {
    value: 0,
    display: document.getElementById("red-points"),
  },
  totalPoints: {
    value: 0,
    display: document.getElementById("totalRedPoints"),
  },
  prePoints: document.getElementById("redTeamPoints"),
};

let blue = {
  name: document.getElementById("team2"),
  points: {
    value: 0,
    display: document.getElementById("blue-points"),
  },
  totalPoints: {
    value: 0,
    display: document.getElementById("totalBluePoints"),
  },
  prePoints: document.getElementById("blueTeamPoints"),
};

function inputTeamNames() {
  red.name.textContent = prompt("Enter Team Red Name");
  blue.name.textContent = prompt("Enter Team Blue Name");
  if(red.name.textContent === null || red.name.textContent ===""){
    red.name.textContent ="Red"
  }
  if(blue.name.textContent === null || blue.name.textContent ===""){
    blue.name.textContent ="Blue"
  }
}

inputTeamNames();

function addRedPoint() {
  red.points.value++;
  red.points.display.textContent = red.points.value;
}
function addBluePoint() {
  blue.points.value++;
  blue.points.display.textContent = blue.points.value;
}

function savePoint() {
  red.prePoints.textContent += " - " + red.points.value;
  blue.prePoints.textContent += " - " + blue.points.value;
  red.totalPoints.value += red.points.value;
  blue.totalPoints.value += blue.points.value;
  red.totalPoints.display.textContent = red.totalPoints.value;
  blue.totalPoints.display.textContent = blue.totalPoints.value;
  red.points.value = blue.points.value = 0;
  red.points.display.textContent = blue.points.display.textContent = 0;
}

function endGame() {
  if (red.totalPoints.value > blue.totalPoints.value) {
    alert(
      red.name.textContent +
        " Wins! " +
        " With the Lead Of " +
        (red.totalPoints.value - blue.totalPoints.value) +
        " Points from " +
        blue.name.textContent,
    );
  } else if (blue.totalPoints.value > red.totalPoints.value) {
    alert(
      blue.name.textContent +
        " Wins!" +
        " With the Lead Of " +
        (blue.totalPoints.value - red.totalPoints.value) +
        " Points from " +
        red.name.textContent,
    );
  } else {
    alert("It's a tie!");
  }
  red.points.value =
    blue.points.value =
    red.totalPoints.value =
    blue.totalPoints.value =
      0;
  red.points.display.textContent =
    blue.points.display.textContent =
    red.totalPoints.display.textContent =
    blue.totalPoints.display.textContent =
      0;
  red.prePoints.textContent = blue.prePoints.textContent = "";

  let userAgreed = confirm("Do you want to change the team names?");
  if (userAgreed) {
    inputTeamNames();
  }
}
