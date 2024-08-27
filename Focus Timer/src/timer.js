import { state } from "./state.js"
import { reset } from "./events.js"
import * as sound from "./sounds.js"
import {minuts1, seconds1} from "./button.js" 

export function countdown () {

  clearTimeout(state.contdownId)

  if(!state.isRunning) {
    return
  }

  let minuts = Number(minuts1.textContent)
  let seconds = Number(seconds1.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minuts--
  }

  if(minuts < 0) {
    reset()
    sound.kichenTimer.play()
    return
    
  }

  upadateDisplay(minuts, seconds)

  state.contdownId = setTimeout(() => countdown(), 1000);
}

export function upadateDisplay (minuts, seconds) {
    minuts = minuts ?? state.minuts 
    seconds = seconds ?? state.seconds

    minuts1.textContent = String(minuts).padStart(2, "0") 
    seconds1.textContent = String(seconds).padStart(2, "0")
}
