import Controls from "./controls.js" 
import Timer from "./timer.js" 
import Sound from "./sounds.js"
import Events from "./events.js"
import {   
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
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

Events({controls, timer, sound})