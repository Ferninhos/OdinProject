let name = prompt("Qual seu nome jogador: ")
let classe = prompt("Qual sua classe: ")

let playerOne = {
    name: name,
    classe: classe,
};

function printInfo(player) {
    return `${player.name}: ${player.classe}`;
    
};

function playerWin(winner) {
    return winner.name + " is the Winner";
};

console.log(printInfo(playerOne));
console.log(playerWin(playerOne));