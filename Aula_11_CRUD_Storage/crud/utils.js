
const urlServer = "http://localhost:3001/animais/";

let btns = document.querySelectorAll('a','.menuLink');
let currentUrl = window.location.href;

for (let btn of btns) {
    
    if (btn.href === currentUrl) {
        btn.classList.add('active');
        break;
    }
}