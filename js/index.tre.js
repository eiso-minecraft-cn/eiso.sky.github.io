
function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var timeText = "现在" + hours + ":" +  minutes  + ":" + seconds + "了哟@~@ | ";

  var timeDisplay = document.getElementById("time-display");
  timeDisplay.textContent = timeText;

  var greeting = "";
  if (hours < 6) {
    greeting = "这么早就起来了？或者，还没睡！";
  } else if (hours < 12) {
    greeting = "美好的一天又又又又开始了！";
  } else if (hours < 14) {
    greeting = "午饭时间到 ~ ";
  } else if (hours < 18) {
    greeting = "下午好呀！";
  } else if (hours < 24) {
    greeting = "完美的一天又快结束了！";
  } else {
    greeting = "时间不早了，该睡觉了！";
  }

  timeDisplay.textContent = timeText + greeting;
 }

setInterval(getTime, 1000);
