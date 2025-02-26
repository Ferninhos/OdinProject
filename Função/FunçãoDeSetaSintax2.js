let idade = prompt("Sua idade? ");

let welcome = (idade >= 18) ? 
    () => alert("Hello"):
    () => alert("Hell no");

welcome();


