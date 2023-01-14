const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");
const digitalTime = document.querySelector("#digital-time");

const setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

const checkTime = (time) => {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};

const setClock = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  const time = digitalTime.children;

  const seconds = checkTime(currentDate.getSeconds());
  const minutes = checkTime(currentDate.getMinutes());
  const hours = checkTime(currentDate.getHours());

  time[0].innerHTML = hours;
  time[1].innerHTML = minutes;
  time[2].innerHTML = seconds;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

setInterval(setClock, 1000);

setClock();
