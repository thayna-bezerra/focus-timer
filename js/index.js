import Controls from "./controls.js" 
import Timer from "./timer.js" 
import Sound from "./sounds.js"
import {   
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff,
  minutesDisplay,
  secondsDisplay, 
} from "./elements.js"


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
  resetControls: controls.reset
})

const sound = Sound()


btnPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
  sound.pressBtn()
})

btnPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressBtn()
})

btnStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressBtn()
})

btnSoundOff.addEventListener('click', function(){
  btnSoundOn.classList.remove('hide')
  btnSoundOff.classList.add('hide')

  sound.bgAudio.pause()
})

btnSoundOn.addEventListener('click', function(){
  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')

  sound.bgAudio.play()
})

btnSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})