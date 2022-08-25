"use strict";

let boton=document.getElementById("mostrarLista");
boton.addEventListener("click",mostrarLista);
let texto=document.getElementById("inputTexto");
boton.classList.add("colorRojo");
let miDiv=document.querySelector(".borde");

function mostrarLista() {
    let li=document.querySelector("ol");
    let item=document.createElement("li");
    item.innerHTML=texto.value;
    li.appendChild(item);
    li.classList.add("negrita");
    boton.classList.add("fondoVerde");
    miDiv.classList.remove("borde");

}
