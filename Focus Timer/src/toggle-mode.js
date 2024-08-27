export const toggleMode = document.querySelector(".toggle-mode")
export const timer =  document.querySelector(".timer")

toggleMode.addEventListener("click", (event) => {

  document.documentElement.classList.toggle("light")
  document.body.classList.toggle("light")
  timer.classList.toggle("dark")
  toggleMode.classList.toggle("moon")

})