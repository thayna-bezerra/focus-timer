import Controls from "./controls.js" 
import Timer from "./timer.js" 

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on') 
const btnSoundOff = document.querySelector('.sound-off') 

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
/////let minutes = Number(minutesDisplay.textContent)

//injeção de dependencias

const controls = Controls({
  btnPause,
  btnPlay,
  btnSet,
  btnStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  ////minutes
})



btnPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
})

btnPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
})

btnStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
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
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(minutes, 0)
  timer.updateMinutes(newMinutes)
})