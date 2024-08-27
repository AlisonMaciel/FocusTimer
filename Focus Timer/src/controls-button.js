import { buttons } from "./button.js"
import * as actions from "./events.js"
import * as el from "./button.js"
import { state } from "./state.js"
import { upadateDisplay } from "./timer.js"

export function controlButtons () {
  buttons.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
     
    }

    actions[action]()
    
  })
}

export function setMinuts () {
  el.minuts1.addEventListener("focus", () => {
    el.minuts1.textContent = ""
  })
     
  el.minuts1.onkeypress = (event) => /\d/.test(event.key)

  el.minuts1.addEventListener('blur', event => {

    let time = event.currentTarget.textContent

    if(time > 60) {
      state.minuts = 60
    } else {
      state.minuts = time
    }
    
    upadateDisplay()

    el.minuts1.removeAttribute("contenteditable")
  })

}
