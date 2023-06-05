let minutesHand = document.getElementById("minutes");
let secondsHand = document.getElementById("seconds");
let hoursHand = document.getElementById("hours");

setInterval(setClock, 1000);

function setRotation(entity, value) {
  entity.style.setProperty("--rotate", value * 360);
}

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60 + 1;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  setRotation(secondsHand, seconds);
  setRotation(minutesHand, minutes);
  setRotation(hoursHand, hours);
}

setClock();
