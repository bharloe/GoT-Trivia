var time = 0;
var lap = 1;
function reset() {
  time = 0;
  $("#timeLeft").text("00:15");
}
function start() {
  intervalId = setInterval(count, 1000);
}
function stop() {
  clearInterval(intervalId);
}

function count() {
  time++;
  var converted = timeConverter(time);
  $("#display").text(converted);
}
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}