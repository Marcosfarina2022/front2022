
"use strict";
let agregar=document.getElementById("agregarT");
agregar.addEventListener("click", agregarTarea);
let tarea=document.getElementById("inputTarea");
let itemNuevo=document.getElementById("misTareas");
let eliminar=document.getElementById("eliminarT")
eliminar.addEventListener("click",elminarTarea);

function agregarTarea() {
let lista=document.createElement("li");
lista.innerHTML=tarea.value;
itemNuevo.appendChild(lista);
itemNuevo.classList.add("misTareas");
    
}
function elminarTarea() {
    
    itemNuevo.innerHTML=" ";
}
