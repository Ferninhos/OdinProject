const container = document.getElementById("container");
const botao = document.getElementById("reset");

function quadroQuadrados (size) {
    if ( 0 < size && size <= 100) {
        container.innerHTML = "";

        const tamanhoQuadradinhos = 500 / size; // calcula o tamanho do quadradinho

        for (let i = 0; i < size * size; i++) {
            const quadradinhos = document.createElement("div");
            quadradinhos.classList.add("square"); // adiciona o quadradinhos ao contexto css "square"
            quadradinhos.style.width = tamanhoQuadradinhos + "px"; // o style precisa de uma string rumo(px)
            quadradinhos.style.height = tamanhoQuadradinhos + "px";
            container.appendChild(quadradinhos);
            quadradinhos.addEventListener("mouseover", event => {// hover
                quadradinhos.style.backgroundColor = "black";
            });
        };
    } else {
        alert("Digite um número entre 0 e 100");
    };
};

botao.addEventListener("click", event => {
    let size = parseInt(prompt("Qual tamanho dos quadradinhos? (MAX-100)")); // parse int transforma em int
    quadroQuadrados(size);
});

quadroQuadrados(16);