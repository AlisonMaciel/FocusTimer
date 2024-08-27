import { state } from "./state.js"
import * as timer from './timer.js'
import { controlButtons, setMinuts } from "./controls-button.js"

export const start = (minuts, seconds) => {
  state.minuts = minuts
  state.seconds = seconds

  timer.upadateDisplay()
  
  controlButtons()
  setMinuts()
}

start(0,0)