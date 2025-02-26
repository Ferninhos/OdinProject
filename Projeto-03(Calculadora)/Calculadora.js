let botoes = document.querySelectorAll("#botoes button");
let sinal = document.querySelectorAll("#calculo .op");
let igual = document.getElementById("igual");
let limpar = document.getElementById("clear");
let display = document.getElementById("display");

let num1 = '';
let num2 = '';
let operador = '';

// funções dos operadores:

function Mais(num1, num2) {
    return num1 + num2;
};

function Menos(num1, num2) {
    return num1 - num2;
};

function Multiplica(num1, num2) {
    return num1 * num2;
};

function Divide(num1, num2) {
    return num2 === 0 ? "Divisão por 0" : num1 / num2;
};

function Operate(num1, operador, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operador) {
        case '+': return Mais(num1, num2);
        case '-': return Menos(num1, num2);
        case 'x': return Multiplica(num1, num2);
        case '/': return Divide(num1, num2);
    };
};

botoes.forEach((botao) => {
    botao.addEventListener("click", event => {
        if (operador == '') { // se ainda não digitou o operador
            num1 += botao.textContent; // guarda o content do botão no numero 1
            display.value = num1;
        } else { // se já digitou então é o segundo número
            num2 += botao.textContent;
            display.value = num2;

        };
    });
});

sinal.forEach((operadorB) => { // para cada botãoOperador nos Sinais
    operadorB.addEventListener("click", event => {
        operador = operadorB.textContent; // só guarda, sinal apenas de igual pois só um sinal
    });
});

igual.addEventListener("click", event => {
    if (num1 != '' && num2 != '' && operador != '') {
        let resultado = Operate(num1, operador, num2);
        display.value = resultado; // display value é um print desde que o id do input seja display
        num1 = resultado.toString();
        num2 = '';
        operador = '';
}});

limpar.addEventListener("click", event => {
    num1 = '';
    num2 = '';
    operador = '';
    display.value = '';
});
