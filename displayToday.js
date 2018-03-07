<<<<<<< HEAD
var dayObject = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

var monthObject = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

var day = document.querySelector("#day");
var month = document.querySelector("#month");
var date = document.querySelector("#date");
var year = document.querySelector("#year");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var timeNow = new Date();

day.textContent = dayObject[timeNow.getDay()];
month.textContent = monthObject[timeNow.getMonth()];
date.textContent = timeNow.getDate();
year.textContent = timeNow.getFullYear();
minutes.textContent = timeNow.getMinutes();
seconds.textContent = timeNow.getSeconds();
hours.textContent = timeNow.getHours();

function timeCheck(){
  timeNow = new Date();
  let newSecond = timeNow.getSeconds();
  let newMinute = timeNow.getMinutes();
  let newHour = timeNow.getHours();
  let newDay = dayObject[timeNow.getDay()];
  let newDate = timeNow.getDate();
  let newMonth = monthObject[timeNow.getMonth()];
  let newYear = timeNow.getFullYear();

  if(seconds.textContent != newSecond){
    seconds.textContent = newSecond;
    if(newSecond == 0 && minutes.textContent != newMinute){
      minutes.textContent = newMinute;
      if(newMinute == 0 && hours.textContent != newHour){
        hours.textContent = newHour;
        if(newHour == 0 && date.textContent != newDate){
          date.textContent = newHour;
          day.textContent = newDay;
            if(newDate == 1 && month.textContent != newMonth){
              month.textContent = newMonth;
              if(newMonth == "January" && year.textContent != newYear){
                year.textContent = newYear;
              }
            }
        }
      }
    }
  }
}

setInterval(timeCheck, 300);
=======
var dayObject = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

var monthObject = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

var day = document.querySelector("#day");
var month = document.querySelector("#month");
var date = document.querySelector("#date");
var year = document.querySelector("#year");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var timeNow = new Date();

day.textContent = dayObject[timeNow.getDay()];
month.textContent = monthObject[timeNow.getMonth()];
date.textContent = timeNow.getDate();
year.textContent = timeNow.getFullYear();
minutes.textContent = timeNow.getMinutes();
seconds.textContent = timeNow.getSeconds();
hours.textContent = timeNow.getHours();

function timeCheck(){
  timeNow = new Date();
  let newSecond = timeNow.getSeconds();
  let newMinute = timeNow.getMinutes();
  let newHour = timeNow.getHours();
  let newDay = dayObject[timeNow.getDay()];
  let newDate = timeNow.getDate();
  let newMonth = monthObject[timeNow.getMonth()];
  let newYear = timeNow.getFullYear();

  if(seconds.textContent != newSecond){
    seconds.textContent = newSecond;
    if(newSecond == 0 && minutes.textContent != newMinute){
      minutes.textContent = newMinute;
      if(newMinute == 0 && hours.textContent != newHour){
        hours.textContent = newHour;
        if(newHour == 0 && date.textContent != newDate){
          date.textContent = newHour;
          day.textContent = newDay;
            if(newDate == 1 && month.textContent != newMonth){
              month.textContent = newMonth;
              if(newMonth == "January" && year.textContent != newYear){
                year.textContent = newYear;
              }
            }
        }
      }
    }
  }
}

setInterval(timeCheck, 300);
>>>>>>> 141772e27d15656a43164b1ddcdc4b44cedec24a
