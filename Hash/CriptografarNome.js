function stringToNumber(nome) {
    let hashCode = 0;
    for (let i = 0; i < nome.length; i++) {
        hashCode += nome.charCodeAt(i)
    }
    
    return hashCode;
}

function hash(name, surname) {
    return stringToNumber(name) + stringToNumber(surname);
};

console.log(hash("Felipe", "Castro"));
//node, armazena um valor ou chave e valor