export const ScreenMode = {
  btnLightMode:
    document.querySelector('.icon-light'),

  btnDarkMode:
    document.querySelector('.icon-dark'),

  html:
    document.querySelector('html'),

  lightMode(){
    toggleScreen()
  }, 

  darkMode(){
    toggleScreen()
  }
}

ScreenMode.btnLightMode.onclick = () => ScreenMode.lightMode()
ScreenMode.btnDarkMode.onclick = () => ScreenMode.darkMode()

function toggleScreen(){
  ScreenMode.btnLightMode.classList.toggle("hide")
  ScreenMode.btnDarkMode.classList.toggle("hide")
  ScreenMode.html.classList.toggle('dark-mode')
}