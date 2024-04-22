let seconds = 0;
let milliseconds = 0;
let timerInterval;

var stop = document.getElementById("stop");
var reset = document.getElementById("reset")
  
  
  
function startWatch() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 10);
  stop.style.display = "unset";
  reset.style.display = "unset";
}

function updateTimer() {
  milliseconds += 10;

  if (milliseconds >= 1000) {
    seconds++;
    milliseconds = 0;
  }

  document.getElementById("seconds").textContent = formatTime(seconds) + ":";
  document.getElementById("mili-seconds").textContent = formatTime(milliseconds / 10);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function stopWatch() {
  clearInterval(timerInterval);
}

function resetWatch() {
  clearInterval(timerInterval);
  seconds = 0;
  milliseconds = 0;
  document.getElementById("seconds").textContent = "00:";
  document.getElementById("mili-seconds").textContent = "00";

  stop.style.display = "none";
  reset.style.display = "none";
}