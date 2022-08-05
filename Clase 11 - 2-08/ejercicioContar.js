"use strict"
let contador=0;

let botonSuma=document.getElementById("sumaClick");
botonSuma=document.addEventListener("click",sumarClicks);

let botonResta=document.getElementById("restaClick");
botonResta=document.addEventListener("click",restarClicks);

let botonMostrar=document.getElementById("muestraClick");
botonMostrar=document.addEventListener("click",mostrarClicks);


function sumarClicks() {
    contador ++;
    document.querySelector("h1").innerHTML= contador;
}

function restarClicks() {
  contador --;  
  document.querySelector("h1").innerHTML= contador;
}
   
function mostrarClicks() {
    document.querySelector("h1").innerHTML= contador;
}

