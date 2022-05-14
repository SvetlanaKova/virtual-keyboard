export default function drowKeyboard (wrapper) {

        const keyArrays = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Alt', 'Space', 'Alt', 'Control','<-','|', '|','->']
        const codesArray = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']

        console.log(codesArray.length); //63
        let out =''
        for (let i = 0; i<keyArrays.length; i++) {
          if (i === 0 || i === 14 || i=== 28 || i === 41 || i === 54) {
            out += `<div class="rows">`
          }
          if (i === 13 || i=== 27 || i === 40 || i === 53) {
            out += `<div class="key" data-key="${codesArray[i]}">${keyArrays[i]}</div></div>`
          } else {
            out += `<div class="key" data-key="${codesArray[i]}">${keyArrays[i]}</div>`
          }
          
          wrapper.innerHTML = out
        }
      }
    
