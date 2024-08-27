import { state } from "./state.js"
import { countdown } from "./timer.js"
import {minuts1, seconds1} from "./button.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  countdown()
  sounds.buttonPressAudio.play()
}

export function set() {
  minuts1.setAttribute('contenteditable', true) 
  minuts1.focus()
  sounds.buttonPressAudio.play() 
} 

export function reset () {
  state.isRunning = false
  document.documentElement.classList.remove("running")
}

export function toggleMusic () {
  document.documentElement.classList.toggle("music-on")
  state.isMute = !state.isMute

  if(!state.isMute) {
    sounds.bugAduio.play()
  } else {
    sounds.bugAduio.pause()
  }
  
}
 