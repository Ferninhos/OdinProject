//para reduzir o array em um único valor
const array = [1, 2, 3, 4, 5,];

const arrayMultiplicada = array.reduce((valorTotal, valorAtual) => {
    return valorTotal * valorAtual;
}, 1); // esse valor é o resultado, sendo o valor inicial depois o valorTotal.

console.log(arrayMultiplicada);