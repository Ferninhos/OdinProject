const server = {

    pessoas: [
        {
            nome: "Roger",
            idade: 20,
        },
        {
            nome: "Cleiton",
            idade: 19,
        },
        {
            nome: "Bonifacio",
            idade: 62,
        },
    ],

    getPeople() {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(this.pessoas)
            }, 2000);
        });
    },
};

server.getPeople().then(pessoas => {
    console.log(pessoas);
}); 