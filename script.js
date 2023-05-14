function displayClock() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
     let amOrpm = 'AM';

    if (hour >= 12) {
        amOrpm = 'PM';
    }
    
    if (hour > 12) {
        hour = hour - 12;

        } else if (hour < 10) {
            hour = `0` + hour;

        } else if (min < 10) {
            min = '0' + min;

        } else  if (min < 10) {
           sec = '0' + sec;
        }
    

    document.getElementById('clock').innerHTML = `${hour} : ${minute} : ${second} ${amOrpm}`;
}
setInterval(displayClock, 1000);