const botao = document.querySelector("button");
const lista = document.querySelector("ul")
const input = document.querySelector("input")

botao.addEventListener("click", event => {
    if (input != "") {
        const dentroLista = document.createElement("li");
        dentroLista.textContent = input.value;
        lista.appendChild(dentroLista);
        
        input.value = ''
        input.focus();

        const apagar = document.createElement("button");
        apagar.textContent = "Delete";
        dentroLista.appendChild(apagar);
        
        apagar.addEventListener("click", event => {
            lista.removeChild(dentroLista);
        });
    };
});