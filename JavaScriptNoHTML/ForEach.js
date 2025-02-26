const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {//pra fazer loop (próprio do JS)
    button.addEventListener("click", event => {
        alert(button.id);
    });
});