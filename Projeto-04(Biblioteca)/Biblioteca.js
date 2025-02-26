//arrumar botao "Add"
//adicionar na minha bilbioteca
const Add = document.getElementById("Add");
const minhaBiblioteca = document.querySelector("h1");

const Biblioteca = [];

function Livro(nome, autor, genero) {
    this.nome = nome;
    this.autor = autor;
    this.genero = genero;
};

Add.addEventListener("click", event => {
    const form = document.createElement("form");
    const nome = document.createElement("input");
    const autor = document.createElement("input");
    const genero = document.createElement("input");
    const botaoAdd = document.createElement("button");

    nome.setAttribute("type", "text");
    nome.setAttribute("placeholder", "Adcione seu Livro");

    autor.setAttribute("type", "text");
    autor.setAttribute("placeholder", "Autor do Livro");

    genero.setAttribute("type", "text");
    genero.setAttribute("placeholder", "Gênero do Livro");

    botaoAdd.textContent = "Adicionar";

    form.appendChild(nome);
    form.appendChild(autor);
    form.appendChild(genero);
    form.appendChild(botaoAdd);
    document.body.appendChild(form);

    botaoAdd.addEventListener("click", event => {
        event.preventDefault();

        if (nome && autor && genero);
            const livroInfo = new Livro(nome.value, autor.value, genero.value);
            Biblioteca.push(livroInfo);
            addLivroNaPagina(livroInfo);
            document.body.removeChild(form);
    })
});

function addLivroNaPagina(livro) {
    const livroNaPagina = document.createElement("h2");
    livroNaPagina.textContent = `${livro.nome}: ${livro.autor} -> ${livro.genero}`;
    document.getElementById("BibliotecaPagina").appendChild(livroNaPagina);
};

