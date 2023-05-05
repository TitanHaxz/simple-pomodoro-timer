const workTime = 25 * 60;
const breakTime = 5 * 60;
let timeLeft = workTime;
let timerId;
let isTimerRunning = false;

function startTimer() {
  isTimerRunning = true;
  timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft === 0) {
      playAlarm();
      if (document.getElementById('timer-label').innerText === 'Work') {
        timeLeft = breakTime;
        document.getElementById('timer-label').innerText = 'Break';
      } else {
        timeLeft = workTime;
        document.getElementById('timer-label').innerText = 'Work';
      }
    }
    updateTimer();
  }, 1000);
}

function stopTimer() {
  isTimerRunning = false;
  clearInterval(timerId);
}

function reset() {
  stopTimer();
  timeLeft = workTime;
  document.getElementById('timer-label').innerText = 'Work';
  updateTimer();
  document.getElementById('start_stop').innerText = 'Start';
  document.getElementById('beep').pause();
  document.getElementById('beep').currentTime = 0;
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('time-left').innerText = `${formattedMinutes}:${formattedSeconds}`;
}

function startStop() {
  if (isTimerRunning) {
    stopTimer();
    document.getElementById('start_stop').innerText = 'Start';
  } else {
    startTimer();
    document.getElementById('start_stop').innerText = 'Stop';
  }
}

function playAlarm() {
  document.getElementById('beep').play();
}

// multi lang
function changeLanguage() {
  var lang = document.getElementById("language").value;
  if(lang === "en"){
    window.location.href = "index.html";
  }else {
    window.location.href = "index_" + lang + ".html";
  }
}