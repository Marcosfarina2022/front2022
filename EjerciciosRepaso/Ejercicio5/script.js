"use strict";
contador=0;
let aumenta=document.getElementById("aumentarElem");
aumenta.addEventListener("click",aumentarElemento);

function aumentarElemento() {
    contador ++;
    document.querySelector("p").innerHTML= contador;
    
}