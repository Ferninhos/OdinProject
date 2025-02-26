const array = ['Roger', 'Pedro', 'Pericles'];
console.log(array[1]);
console.log(array.join(" * "));
//document.getElementById("Demo").innerHTML(array.join(" O ")); para substituir um id HTML
array.pop(); // tira o último do array
console.log(array);// em arrays não usar delete sempre pop(ultimo) ou shift(primeiro)
array.push("Pericles");
console.log(array.toString());

const frutas = ['Murango', 'Banana', 'Rogerio']
const doces = ['Torta', 'Cristalizadas', 'Pedras']

const frutasDoces = frutas.concat(doces);
console.log(frutasDoces.join(" # "));
console.log(frutasDoces.copyWithin(3, 0, 3));//target = 3: A partir do índice 3, os elementos copiados serão colocados.
//start = 0: A cópia começa a partir do índice 0