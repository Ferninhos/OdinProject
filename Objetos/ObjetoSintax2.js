const user = {
    nome: "roger",
    idade: 87,
    "nao gosto de vc roger": function(e) {
        alert("VOCÊ ESTÁ EM PERIGO!!")
    },
};

let botao = document.querySelector("button");

botao.addEventListener("click", event => {
    let frase = prompt("Oi, como vc está, sou roger! "); 
    if (frase == "nao gosto de vc roger") {
        user["nao gosto de vc roger"]();
    } else {
        alert("Resposta INESPERADA!");
    };
});

console.log(user.nome);
console.log(user["nao gosto de vc roger"]);

