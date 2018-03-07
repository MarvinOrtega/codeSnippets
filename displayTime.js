var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var title = document.getElementsByTagName('title')

var date = new Date(Date.now());

seconds.textContent = date.getSeconds();
minutes.textContent = date.getMinutes();
hours.textContent = date.getHours();

function timeCheck(){
  date = new Date(Date.now());
  let newSecond = date.getSeconds();
  let newMinute = date.getMinutes();
  let newHour = date.getHours();

  if(seconds.textContent != newSecond){
    seconds.textContent = newSecond;
    if(newSecond == 0 && minutes.textContent != newMinute){
      minutes.textContent = newMinute;
      if(newMinute == 0 && hours.textContent != newHour){
        hours.textContent = newHour;
      }
    }
  }
}

setInterval(timeCheck, 300);
