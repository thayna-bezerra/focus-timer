//BOTÕES DE CONTROLE
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')

const btnStop = document.querySelector('.stop')

const btnIncrease = document.querySelector('.increase')
const btnDecrease = document.querySelector('.decrease')

//CARDS SONOROS
const cardForest = document.querySelector('.forest-song')
const cardRain = document.querySelector('.rain-song')
const cardCoffee = document.querySelector('.coffee-song')
const cardFire = document.querySelector('.fireplace')

//PARA O CRONOMETRO
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//SOUNDS
const forestSong = new Audio('sounds/Floresta.wav')
const rainSong = new Audio('sounds/Chuva.wav')
const coffeeSong = new Audio('sounds/Cafeteria.wav')
const fireplaceSong = new Audio('sounds/Lareira.wav')

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
  if(minutes > 0){
    updateTimerDisplay(minutes -= 5, 0)
  }
})

//CARDS PARA INICIAR FUNDO SONORO
cardForest.addEventListener('click', function(){
  cardForest.classList.add('is-selected')
  cardRain.classList.remove('is-selected')
  cardCoffee.classList.remove('is-selected')
  cardFire.classList.remove('is-selected')

  forestSong.play();
  rainSong.pause()
  coffeeSong.pause()
  fireplaceSong.pause()
})

cardRain.addEventListener('click', function(){
  cardForest.classList.remove('is-selected')
  cardRain.classList.add('is-selected')
  cardCoffee.classList.remove('is-selected')
  cardFire.classList.remove('is-selected')  
  
  forestSong.pause()
  rainSong.play();
  coffeeSong.pause()
  fireplaceSong.pause()
})

cardCoffee.addEventListener('click', function(){
  cardForest.classList.remove('is-selected')
  cardRain.classList.remove('is-selected')
  cardCoffee.classList.add('is-selected')
  cardFire.classList.remove('is-selected')

  forestSong.pause()
  rainSong.pause()
  coffeeSong.play()
  fireplaceSong.pause()
})

cardFire.addEventListener('click', function(){
  cardForest.classList.remove('is-selected')
  cardRain.classList.remove('is-selected')
  cardCoffee.classList.remove('is-selected')
  cardFire.classList.add('is-selected')

  forestSong.pause()
  rainSong.pause()
  coffeeSong.pause()
  fireplaceSong.play()
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



