// the date we are counting down to
const countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

// get elements from HTML
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// format the time so it will display 0 in front
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// update the countdown every 1 second
let x = setInterval(function() {

    // Get today's date and time;
    let now = new Date().getTime();

    // the distance between now and the date
    let distance = countDownDate - now;

    // calculate days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display the timers into HTML elements
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    // if the count is finished
    if (distance < 0) {
        clearInterval(x);
        // hide span elements
        document.getElementById('spanD').style.visibility="hidden";
        document.getElementById('spanH').style.visibility="hidden";
        document.getElementById('spanM').style.visibility="hidden";
        document.getElementById('spanS').style.visibility="hidden";
        // hide top text H1
        document.getElementById('topText').style.visibility = "hidden";
        // write new text
        daysEl.innerHTML = "Happy";
        hoursEl.innerHTML = "New";
        minutesEl.innerHTML = "Year";
        secondsEl.innerHTML = "2022";
    }

}, 1000);