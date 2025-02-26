//Pc x Jogador = Pedra, Papel, Tesouuuuuuuuuuuuuuuuuuuuuura
function JoKenPo() {
    let computerScore = 0;
    let jogadorScore = 0;
    const changeChoice = {1: "Pedra", 2: "Papel", 3: "Tesoura"};

    while (true){
        let generateChoice = Math.floor(Math.random() * 3) + 1;
        let computerChoice = changeChoice[generateChoice];
        let açãoJogador = prompt("Pedra, Papel ou Tesoura?");

        if (
            computerChoice == "Pedra" && açãoJogador == "Papel" || 
            computerChoice == "Papel" && açãoJogador == "Tesoura" || 
            computerChoice == "Tesoura" && açãoJogador == "Pedra") 
            {
            alert(`Você Ganhou: PC escolheu ${computerChoice}`)
            jogadorScore ++

        } else if (
            computerChoice == "Tesoura" && açãoJogador == "Papel" ||
            computerChoice == "Pedra" && açãoJogador == "Tesoura" || 
            computerChoice == "Papel" && açãoJogador == "Pedra") 
            {
            alert(`Você perdeu: PC escolheu ${computerChoice}`);
            computerScore ++

        } else if (açãoJogador == "Pare") {
            return false

        } else if (computerScore == 3) {
            alert("Voce perdeu!")
            alert("PC Wins! Fatalidade")
            return false
        
        } else if (jogadorScore == 3) {
            alert("Você ganhou!")
            alert("Jogador vence Maquina! OMG")
            return false

        } else {alert("Empate")}
    }
};

JoKenPo();