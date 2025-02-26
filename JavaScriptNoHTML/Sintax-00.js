/*
const div = document.createElement("div");
div.style.cssText = 'color:blue; background:white;';
div.setAttribute('id', 'divUm');
div.classList.add('new')
div.textContent = 'Bruno Hello' */

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Hello Bruno";

container.appendChild(content)