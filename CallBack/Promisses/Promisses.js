let promisse = new Promise(function(resolve, reject) {

    setTimeout(() => resolve("Tudo Certo"), 1000);
}); //depois de executado ele fecha, não pode executar 2 por ex.