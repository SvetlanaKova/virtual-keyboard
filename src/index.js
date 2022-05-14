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

let keyInput = document.querySelector("textarea");
let keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", addClickEffects));

function addClickEffects(event) {
  keys.forEach(
    (key) => setTimeout(() => key.classList.remove("active"), 100)
  );
  keys.forEach((key) => {
    if (key.dataset.key === event.code) {
      console.log(key.classList.add("active"));
    }
  });
  if (
    !(
      event.srcElement.outerText === "Backspace" ||
      event.srcElement.outerText === "CapsLock" ||
      event.srcElement.outerText === "Shift" ||
      event.srcElement.outerText === "Enter" ||
      event.srcElement.outerText === "Space" ||
      event.srcElement.outerText === "Control" ||
      event.srcElement.outerText === "Alt"
    )
  ) {
    keyInput.value += event.srcElement.outerText;
  }
  if (event.srcElement.outerText === "Backspace") {
    keyInput.value = keyInput.value.slice(0, -1);
  }
}
document.addEventListener("keydown", (event) => {
  keys.forEach((key) =>
      setTimeout(() => key.classList.remove("active"), 100)
    );
    keys.forEach((key) => {
      if (key.dataset.key === event.code) {
        key.classList.add("active");
        console.log(key);
      }
    });
  if (
    !(
      event.key === "Backspace" ||
      event.key === "CapsLock" ||
      event.key === "Shift" ||
      event.key === "Enter" ||
      event.key === "Space" ||
      event.key === "Control" ||
      event.key === "Alt"
    )
  ) {
    keyInput.value += event.key;
    
  }
  if (event.key === "Backspace") {
    keyInput.value = keyInput.value.slice(0, -1);
  }
});
