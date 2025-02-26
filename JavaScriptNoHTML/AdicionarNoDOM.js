/* 
Metodos de eventos no DOM:
Primeiro -> Criar no próprio HTML -- não indicado
Segundo -> uma função de seta com o onclick 
Terceiro -> addEventListener
Quarto -> Função 
*/

//Metodo 2
const botãoDois = document.querySelector("#segundoMetodo");
botãoDois.onclick = () => alert("Hello World 2");

//Metodo 3
const botãoTres = document.querySelector("#terceiroMetodo");
botãoTres.addEventListener("click", event => {
    alert("Hello World 3");
    console.log(event.target);
    event.target.style.background = "blue";
});

//Metodo 4
function alertHello () {
    alert("Hello World 4");
};