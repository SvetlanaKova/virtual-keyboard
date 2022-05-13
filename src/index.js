import "./assets/styles/style.css";
import "./assets/styles/style.scss";
import Keyboard from "./Keyboard";
import creatElementFunc from "./creatElement";

const wrapper = document.createElement("div");
wrapper.classList = "wrapper";
document.body.appendChild(wrapper);


const textarea = document.createElement("textarea");
textarea.setAttribute("rows", 10);
textarea.setAttribute("cols", 45);
wrapper.appendChild(textarea);


const keyboard = document.createElement("div");
keyboard.classList = "keyboard";
wrapper.appendChild(keyboard);

Keyboard(keyboard);

let keys = document.querySelectorAll('key');
keys.forEach(key => key.addEventListener('click', addClickEffects))

function addClickEffects (event) {
  console.log(event);
}