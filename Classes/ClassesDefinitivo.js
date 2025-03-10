class Player {

    #level;
    constructor(nome, classe, level) {
        this._nome = nome;
        this._classe = classe;
        this.#level = level;
    }

    get nome() {
        return this._nome.toUpperCase();
    }

    get classe() {
        return this._classe.toUpperCase();
    }

    set nome(novoNome) {
        if (novoNome.length <= 3) {
            console.log("Nome precisa ter mais que 3 caracteres!")
            return;
       }
       this._nome = novoNome;
    }

    walk() {
        return `${this.nome} is walking`
    }
    
    static walkUndefined() {
        return "Alguém está andando"
    }

    seeLevel() {
        return `${this._nome} está no level: ${this.#level}`;
    }
}

class User extends Player {
    constructor(nome, classe, level) {
        super(nome, classe, level)
    }
}

const playerOne = new Player("space", "Rogue", 19);
console.log(playerOne);
console.log(playerOne.nome);//valor com getter
console.log(playerOne._nome);//valor original
console.log(playerOne.level);//Não será acessivel pois é privado/undefined
console.log(playerOne.classe);
console.log(playerOne.seeLevel());//Unico jeito
const novoNome = prompt("Qual o seu novo nome: ");
playerOne.nome = novoNome;
console.log(playerOne._nome);
console.log(playerOne.nome);
console.log(Player.walkUndefined());
console.log("_________________________");

const playerTwo = new User("roger", "Mage", 20);
console.log(playerTwo.nome);
console.log(playerTwo._nome);
console.log(playerTwo.walk());
console.log(playerOne.walk());
console.log(playerTwo.seeLevel());