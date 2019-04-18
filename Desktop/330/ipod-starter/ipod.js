// Create your global variables below:
var tracklist = [
  "Let It Happen",
  "Nangs",
  "The Moment",
  "Yes I'm Changing",
  "Eventually",
  "Gossip",
  "The Less I Know The Better",
  "Past Life",
  "Disciples",
  "'Cause I'm A Man"
];
var volLevels = [];
var volLevel = 3;
var time;

function init() {
  // Your code goes here
  for (i = 0; i < 6; i++) {
    volLevels.push(document.getElementById("vl" + i));
  }
  for (i = 0; i < 3; i++) {
    volLevels[i].style.backgroundColor = "#9f5cc4";
  }
}

function volUp() {
  // Your code goes here
  if (volLevel < 6) {
    volLevels[volLevel].style.backgroundColor = "#9f5cc4";
    volLevel++;
  }
}

function volDown() {
  // Your code goes here
  if (volLevel > 0) {
    volLevel--;
    volLevels[volLevel].style.backgroundColor = "White";
  }
}

function switchPlay() {
  // Your code goes here
  if (document.getElementById("play").innerHTML == "pause") {
    document.getElementById("play").innerHTML = "play_arrow";
    clearInterval(time);
  } else {
    document.getElementById("play").innerHTML = "pause";
    time = setInterval(function() {
      if (time == 180) {
        nextSong();
      } else {
        time = ++document.getElementById("player-time").value;
        document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
      }
    }, 1000);
  }
}

function nextSong() {
  // Your code goes here
}

function prevSong() {
  // Your code goes here
}

function secondsToMs(d) {
  d = Number(d);

  var min = Math.floor(d / 60);
  var sec = Math.floor(d % 60);

  return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
