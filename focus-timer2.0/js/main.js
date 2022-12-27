import {ScreenMode} from "./screenMode.js"

//BOTÕES DE CONTROLE DO CRONOMETRO
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

const btnStop = document.querySelector('.stop')

const btnIncrease = document.querySelector('.increase')
const btnDecrease = document.querySelector('.decrease')

//PARA O CRONOMETRO
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//CARDS SONOROS
const cardForest = document.querySelector('.forest-song')
const cardRain = document.querySelector('.rain-song')
const cardCoffee = document.querySelector('.coffee-song')
const cardFire = document.querySelector('.fireplace')

//SONS
const forestSong = new Audio('sounds/Floresta.wav')
const rainSong = new Audio('sounds/Chuva.wav')
const coffeeSong = new Audio('sounds/Cafeteria.wav')
const fireplaceSong = new Audio('sounds/Lareira.wav')

forestSong.loop = true
rainSong.loop = true;
coffeeSong.loop = true;
fireplaceSong.loop = true;

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
  if(minutes > 0){
    updateTimerDisplay(minutes -= 5, 0)
  }
})

//CRONOMETRO
function resetControls(){
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
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

//CARDS PARA INICIAR FUNDO SONORO
cardForest.addEventListener('click', function(){
  selectCard(cardForest, cardFire, cardRain, cardCoffee) 
  selectSound(forestSong, coffeeSong, fireplaceSong, rainSong)
  changeVolume(forestSong, document.querySelector('#volume-forest'))
})

cardRain.addEventListener('click', function(){
  selectCard(cardRain, cardFire, cardForest, cardCoffee)
  selectSound(rainSong, coffeeSong, fireplaceSong, forestSong)
  changeVolume(rainSong, document.querySelector('#volume-rain'))
})

cardCoffee.addEventListener('click', function(){
  selectCard(cardCoffee, cardFire, cardForest, cardRain)
  selectSound(coffeeSong, fireplaceSong, forestSong, rainSong)
  changeVolume(coffeeSong, document.querySelector('#volume-coffee'))
})

cardFire.addEventListener('click', function(){
  selectCard(cardFire, cardForest, cardRain, cardCoffee)
  selectSound(fireplaceSong, forestSong, rainSong, coffeeSong)
  changeVolume(fireplaceSong, document.querySelector('#volume-fireplace'))
})

function changeVolume(sound, currentVolume){
  let CurrentVolume = currentVolume
  sound.volume = CurrentVolume.value / 100;
}

function selectSound(soundOne, soundTwo, soundThree, soundFour){
  soundOne.play();
  soundTwo.pause();
  soundThree.pause();
  soundFour.pause();
}

function selectCard(cardOne, cardTwo, cardThree, cardFour){
  cardOne.classList.add('is-selected')
  cardTwo.classList.remove('is-selected')
  cardThree.classList.remove('is-selected')
  cardFour.classList.remove('is-selected')
}