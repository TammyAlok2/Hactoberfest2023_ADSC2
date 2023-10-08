
let clock = document.querySelector(".clock");
let Meridiem = "AM";


function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hour === 00) {
    hour = 12;
    Meridiem = "AM";
  }
  else if (hour === 12) {
      Meridiem = "PM";
  } 
  else if ( hour >=12){
    hour = hour - 12;
    Meridiem = "PM"
  } 

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  setTimeout(function () {
    showTime();
  }, 1000);
  clock.innerHTML = `${hour} : ${minutes} : ${seconds} ${Meridiem}`;
}

showTime();







