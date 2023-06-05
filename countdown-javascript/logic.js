function startTimer(expirationTime, elem) {
  let hours, minutes, seconds;
  let timer = expirationTime;
  setInterval(() => {
    hours = parseInt(timer / 60 / 60, 10);
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    elem.innerText = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = expirationTime;
    }
  }, 1000);
}

window.onload = function () {
  let fiveMinutes = 5 * 60 * 12;
  startTimer(fiveMinutes, document.getElementById("countdown"));
};
