function Player(nome, classe) {
    this.nome = nome;
    this.classe = classe;
    this.printInfo = function() {
        console.log(`${this.nome}: ${this.classe}`)
    };
};

Player.prototype.oiGoku = function() {
    console.log("Oi, eu sou o Goku.")
}

const playerOne = new Player("Felipe", "Druid");
const playerTwo = new Player("Roger", "Rogue");

playerOne.printInfo();
playerTwo.printInfo();

console.log(Object.getPrototypeOf(playerOne) === Player.prototype);
playerOne.oiGoku();

