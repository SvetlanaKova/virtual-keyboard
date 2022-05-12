import "./assets/styles/style.css"
import "./assets/styles/style.scss"
import Keyboard from "./Keyboard"
  const element = document.createElement('div');
  element.classList = 'wrapper'
  document.body.appendChild(element)

  Keyboard(element)