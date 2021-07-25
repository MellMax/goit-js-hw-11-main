import '../css/common.css';

const date = document.querySelector("#date-selector")
date.addEventListener("input", onInput)

const startBtn = document.querySelector("[data-start]")
startBtn.addEventListener("click", onClick)
startBtn.setAttribute("disabled", true)

const daysEl = document.querySelector("[data-days]")
const hoursEl = document.querySelector("[data-hours]")
const minutesEl = document.querySelector("[data-minutes]")
const secondsEl = document.querySelector("[data-seconds]")

let currentDate = 0
let settledDate = 0
let delta = 0
    
function onClick() {
    currentDate = Date.now()
    delta = settledDate - currentDate
    
    if (delta > 0) {
        const intervalId = setInterval(() => {
            currentDate = Date.now()
            delta = settledDate - currentDate
            let { days, hours, minutes, seconds } = convertMs(delta)
            // console.log("Settled interval : ", convertMs(delta))

            if (delta >= 0) {
                secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds
                minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes
                hoursEl.textContent = hours < 10 ? '0' + hours : hours
                daysEl.textContent = days < 10 ? '0' + days : days
            } else {
                clearInterval(intervalId)
                // console.log("Cleared interval : ", convertMs(delta))
            }
            
        }, 1000)
    } else {
        Swal.fire('Please choose a date in the future')    
    }
}

function onInput(event) {
    currentDate = Date.now()
    settledDate = Date.parse(event.target.value)
    delta = settledDate - currentDate
 
    if (delta > 0) {
        startBtn.removeAttribute("disabled")
    } else {
        startBtn.setAttribute("disabled", true)
    }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}