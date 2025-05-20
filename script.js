let count = 0;
let countMinute = 0;
let countHour = 0;
const timer = setInterval(() => {
  count++;
  document.getElementById('counter').innerText = `Seconds passed: ${count}`
  if(count == 60){
    countMinute++;
    document.getElementById('minuteCounter').innerText = `Minutes passed: ${countMinute}`
  }
  if(countMinute == 60){
    countHour++;
    document.getElementById('hourCounter').innerText = `Hours passed: ${countHour}`
  }
  if (count >= 9999999999) {
    clearInterval(timer); // stop after __ seconds
  }
}, 1000);
