const text = document.querySelector("#text");
const output = document.querySelector("#output");

text.addEventListener("keydown", event => {
    output.textContent = `Você pressionou: ${event.key}`;
});