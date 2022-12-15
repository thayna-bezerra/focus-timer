const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on') 
const btnSoundOff = document.querySelector('.sound-off') 

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function resetControls(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
  btnSet.classList.remove('hide')
  btnStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
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
    
    if(minutes <= 0) {  
      resetControls()
      return
    }
    
    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

btnPlay.addEventListener('click', function(){
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  
  btnSet.classList.add('hide')
  btnStop.classList.remove('hide')

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

btnSoundOff.addEventListener('click', function(){
  btnSoundOn.classList.remove('hide')
  btnSoundOff.classList.add('hide')
})

btnSoundOn.addEventListener('click', function(){
  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')
})

btnSet.addEventListener('click', function(){
  let newMinutes = prompt('Quantos minutos?') 

  if(!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})