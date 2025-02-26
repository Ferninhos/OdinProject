//mais para se fazer atualizações
const div = document.createElement("div");//cria na memoria não no DOM
div.textContent = "Sou um elemento não DOM";
div.classList.add("minha-classe");
div.id = "ID-01"

document.body.appendChild(div);//adicionado para a pagina para ficar assim:
/*<body>
<div id="meu-id" class="minha-classe">Olá, mundo!</div>
</body>*/