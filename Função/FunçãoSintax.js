function tripleArray() {
    const array = [4, 3, 7, 8, 2];
    let valor = 0;
    for (let impar of array) {
        if (impar % 2 != 0){
            valor += impar * 3;
            console.log(impar * 3);
        }
    }
    return valor
};
let valorFinal = tripleArray();
console.log(valorFinal);