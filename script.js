const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on') 
const btnSoundOff = document.querySelector('.sound-off') 

btnPlay.addEventListener('click', function(){
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  
  btnSet.classList.add('hide')
  btnStop.classList.remove('hide')
})

btnPause.addEventListener('click', function(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
})

btnStop.addEventListener('click', function(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
  btnSet.classList.remove('hide')
  btnStop.classList.add('hide')
})

btnSoundOff.addEventListener('click', function(){
  btnSoundOn.classList.remove('hide')
  btnSoundOff.classList.add('hide')
})

btnSoundOn.addEventListener('click', function(){
  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')
})