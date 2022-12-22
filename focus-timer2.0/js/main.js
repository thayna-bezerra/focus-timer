//BOTÕES DE CONTROLE
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

const btnStop = document.querySelector('.stop')

const btnIncrease = document.querySelector('.increase')
const btnDecrease = document.querySelector('.decrease')

//CARDS SONOROS
const cardOne = document.querySelector('.forest-song')
const cardTwo = document.querySelector('.rain-song')
const cardThree = document.querySelector('.coffee-song')
const cardFour = document.querySelector('.fireplace')

//PARA O CRONOMETRO
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//////////////////////////////////////////////

//BOTÕES DE INICIAR E PAUSAR O CRONOMETRO
btnPlay.addEventListener('click', function(){
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')

  countdown()
})

btnPause.addEventListener('click', function(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')

  clearTimeout(timerTimeOut)
})

btnStop.addEventListener('click', function(){
  resetControls()
  resetTimer()
})

btnIncrease.addEventListener('click', function(){
  updateTimerDisplay(minutes += 5, 0)
})

btnDecrease.addEventListener('click', function(){
  updateTimerDisplay(minutes -= 5, 0)
})

//CRONOMETRO
function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetControls(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
}

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0){
      resetControls()
      return
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds -1))

    countdown()
  }, 1000)
}


