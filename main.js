var currentTime = new Date()
function setNumberClock(){
    const numberClock = document.querySelector('.number-clock')
    const formatHour = document.querySelector('.format-hour')
    const blockTimes = document.querySelector('.day-month-year')
    var currentTime = new Date()
    var hour = currentTime.getHours()
    var minute = currentTime.getMinutes()
    var second = currentTime.getSeconds()
    var formatTime = 'AM'
    // hour = (hour < 10 ) ? "0" + hour : hour;
    if(hour > 12) formatTime = 'PM'
    hour = hour > 12 ? hour -= 12 : hour
    hour = (hour < 10 ) ? "0" + hour : hour;
    minute = (minute < 10 ) ? "0" + minute : minute;
    second = (second < 10 ) ? "0" + second : second;
    var time = hour + ':' + minute + ':' + second
    // numberClock.innerText = time
    numberClock.textContent = time
    formatHour.textContent = formatTime
    var arrTimes = currentTime.toString().split(' ')
    blockTimes.innerText = arrTimes[0] + ' - ' + arrTimes[1] + ' - ' + arrTimes[2] + ' - ' + arrTimes[3] 
}
setInterval(setNumberClock, 1000)
setNumberClock()

