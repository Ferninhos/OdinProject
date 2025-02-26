function makeUser(nome, idade, anime){
    return {
        nome: nome,
        idade: idade,
        anime: anime,
    };
};

const userAdmin = makeUser("Felipe", 21, "Gurren");

console.log(Object.values(userAdmin).join(' * '));

const data = {idade: 2};
const dataCopia = data;

dataCopia.idade = 5; //keys de objetos mudam até indiretamente

console.log(dataCopia);
console.log(data);

let animal = {especie: "dog"};
let roger = animal;

animal = {especie: "cat"};

// roger não vai mudar, se fosse roger.especie = "cat" os 2 mudariam
