function ola (nome, callback) {
    console.log(`Olá ${nome}`)
    callback();
};

function despedida() {
    console.log(`Até mais`);
};

ola("Ana", despedida);

