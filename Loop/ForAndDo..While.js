const nomes = ['Roger', 'monkey', 'babid', 'goku'];

for (const nome of nomes) {
    console.log(nome);
};

for (let nome = 0; nome < nomes.length; nome++) {
    console.log(nomes[nome]);
};

do {// Faz primeira vez, se o while for true faz até acabar
    nomes.pop();
} while (nomes.length > 0);

console.log(nomes);