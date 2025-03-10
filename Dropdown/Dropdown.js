const botaoCinema = document.querySelector(".botaoCinema");
const subCinema = document.querySelector(".subcinema");
botaoCinema.addEventListener("click", event => {
    subCinema.classList.toggle("aberto");
    botaoCinema.classList.toggle("hover-ativo");
});

document.addEventListener("click", event => {
    if (!subCinema.contains(event.target) && !botaoCinema.contains(event.target)){
        subCinema.classList.remove("aberto");
        botaoCinema.classList.remove("hover-ativo");
    }
});