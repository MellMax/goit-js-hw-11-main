const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]')
}

let timerId = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
refs.btnStart.addEventListener('click', onChangeColorBody)
refs.btnStop.addEventListener('click', onCancelColorBody)


function onChangeColorBody() {
    timerId = setInterval(() => {

       document.body.style.backgroundColor = getRandomHexColor()
      }, 1000);
      refs.btnStart.setAttribute("disabled", "true");
}

function onCancelColorBody() {
    clearInterval(timerId);
    document.body.style.backgroundColor = ''
  refs.btnStop.removeAttribute('disabled')

}
