function addOne(num) {
    return num + 1;
}

const array = [1, 2, 3, 4, 5, 6];
const arrayMaisUm = array.map(addOne);//tipo um for loop para func
console.log(arrayMaisUm);

//or

const array2 = [2, 3, 4, 5, 6, 7];
const arrayMaisDois = array2.map((num) => num + 2);//o primeiro num é o parametro
                                                //da função não o nome
console.log(arrayMaisDois);

//filter se usa para filtrar apenas alguns valores, mesmo funcionamento