console.log(sayHello());//roda o sayHello() mesmo vindo depois
function sayHello() {
    alert("Hello");
}
let sayHi = function() { // se chamar consolelog a func sem o () so roda no console
    alert("Hi");
}
console.log(sayHi());//só roda depois