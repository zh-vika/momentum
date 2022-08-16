/*вывод часов и даты не работает*/
const time = document.querySelector('.time');
const DATE = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
function showTime() {
const date = new Date();
const currentTime = date.toLocaleTimeString();
time.textContent = currentTime;
showGreeting();
showDate();
setTimeout(showTime, 1000);
}
showTime();

function showDate(){
const date = new Date();
const options = {weekday:'long',month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-US', options);
DATE.textContent = currentDate;
setTimeout(showDate, 1000);
}


//приветствие
function getTimeOfDay(){
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
    if(hours>=0 && hours<6){
    greeting.textContent = 'Good Night';
  } else if(hours>=6 && hours<=12){
    greeting.textContent = 'Good Morning';
  }else if(hours>12 && hours<=18){
    greeting.textContent = 'Good Day';
  }else if(hours>18 && hours<=23){
    greeting.textContent = 'Good Evening';
  }
}
function showGreeting(){
  const timeOfDay = getTimeOfDay();
  // const greetingText = `Good ${timeOfDay}`;
}
