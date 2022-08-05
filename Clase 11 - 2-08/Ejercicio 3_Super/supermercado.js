
"use strict"
let total=0;
let productoU = [];
let precioU = [];
let cantidadU = [];
let agregarAlCarrito=document.getElementById("agregarCarrito");
agregarAlCarrito.addEventListener("click", agregarProducto);

let calcular=document.getElementById("calcularTotal");
calcular.addEventListener("click", calcularTotal);

let lista=document.querySelector(".miLista");
lista.classList.add("colorRojo")


function agregarProducto() {

    let producto=document.querySelector(".productoUnitario").value;
    productoU.push(producto);

    let precio= parseInt( document.querySelector(".precioUnitario").value);
    precioU.push(precio);

    let cantidad= parseInt(document.querySelector(".cantidadProducto").value);
    cantidadU.push(cantidad);
    let nuevoItem=document.createElement("li");
    nuevoItem.innerHTML= producto + " " + cantidad + " Un " + " a " + " " + precio + " C/u ";

    lista.appendChild(nuevoItem);
}

function calcularTotal() {
    
    for (let i = 0; i < productoU.length; i++) {
    total = total + parseInt((precioU[i] * cantidadU[i]));      
    }
  document.querySelector("p").innerHTML = "El total de su compra es " + total; 
}
