//Uso de function para Infos que variam
function Person(name) {
    this.name = name; 
};
//Uso de Prototype em Infos Estáticas(funções por exemplo)
Person.prototype.printName = function() {
    console.log(this.name + " - Status: {Admin(GM)}");
};

function Player(name, classe, level) {
    this.name = name;
    this.classe = classe;
    this.level = level;
};

Player.prototype.printInfo = function() {
    console.log(`${this.name}: ${this.classe} - Level: ${this.level}`);
};

let admin = new Person("Felipe");
admin.printName();
let player1 = new Player("Roger", "Rogue", 60);
player1.printInfo();
let player2 = new Player("Eduardo", "Alquimista", 16);
player2.printInfo();