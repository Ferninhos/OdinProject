function buscarDados(callback) {
    console.log("Buscando Dados...")
    setTimeout(() => {
        const dados = { nome: "Carlos", idade: 19};
        callback(dados);//passa os dados para a mostrarDados
    }, 2000);
}

function mostrarDados(dados) {
    console.log("Dados recebidos:", dados);
}

buscarDados(mostrarDados);