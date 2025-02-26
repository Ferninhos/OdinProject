const Biblioteca = [];

function Livro(nome, autor, genero) {
    this.nome = nome;
    this.autor = autor;
    this.genero = genero;
};
//adicionar livros na const Biblioteca quando chamada
//já que estou usando uma array, use métodos de array
function addLivros(Livro) {
    Biblioteca.push(Livro)
};

const livrosIndexados = [
    {nome: "TheGreatGatsby", autor: "F. Scott Fitzgerald", genero: "Romance"},
    {nome: "Harry Potter e a Pedra Filosofal", autor: "J. K. Rowling", genero: "Fantasia" },
    {nome: "Harry Potter e a Criança Amaldiçoada", autor: "J. K. Rowling", genero: "Fantasia"},
    {nome: "Game Of Thrones", autor: "George R. R. Martin", genero: "Ficção"},
];

function loopAdd() {
    for (let i = 0; i < livrosIndexados.length; i++) {
        let livro = new Livro(
            livrosIndexados[i].nome,
            livrosIndexados[i].autor,
            livrosIndexados[i].genero,
        )
        addLivros(livro);
    };
};

loopAdd();

console.log(Biblioteca);