const paragrafo = document.createElement("p");
paragrafo.textContent = "Sou um parágrafo";
paragrafo.style.cssText = "color:blue; background:green;";
paragrafo.classList.add("estilo-paragrafo"); //ai no css ou html teria uma classe

const texto = document.createElement("h3");
texto.textContent = "Fazer um teste";
texto.style.cssText = "color:red;";
texto.id = "h3-red";

const bloco = document.createElement("div");
bloco.style.cssText = "background:pink;";

const titulo = document.createElement("h1");
titulo.textContent = "estou em uma div";
bloco.appendChild(titulo);

const paragrafoDiv = document.createElement("p");
paragrafoDiv.textContent = "EU TAMBÉM!";
bloco.appendChild(paragrafoDiv);

document.body.appendChild(paragrafo);
document.body.appendChild(texto);
document.body.appendChild(bloco);




