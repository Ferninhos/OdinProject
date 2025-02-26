//fazer uma função
//ligar a um objeto do html

const botão = document.querySelector("#botão");
const ação = document.querySelector("#ação");

botão.addEventListener("click", event => {
    ação.textContent = `Você clicou em ${botão.name}`;
});