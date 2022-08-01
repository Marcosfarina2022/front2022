"use strict";

let evento = document.getElementById("arreglo");
evento.addEventListener("input",mostrar);

function mostrar(){
var arreglo= new Array(4);
for (let i = 0; i < 4; i++) {
    arreglo[i] = console.log(arreglo[i]);
}
}
