
"use script";
contador7=0;

let boton=document.getElementById("tirarDados");
boton.addEventListener("click", lanzarDados);
let limpiarBoton=document.getElementById("limpiartirada");
limpiarBoton.addEventListener("click",limpiarLanzamiento)



function lanzarDados() {
 let dado1=0;
 let dado2=0;
 for (let i = 0; i < 1000; i++) {
    dado1=Math.floor((Math.random())*(6 - 1 + 1) + 1);
    dado2=Math.floor((Math.random())*(6 - 1 + 1) + 1);
    if (dado1 + dado2===7) {
        contador7++;  
    }    
   } 
   document.getElementById("resultado").innerHTML= " La cantidad de veces 7 es igual a: " + contador7;
   contador7=0; 
 }

 function limpiarLanzamiento() {
    resultado.innerHTML= " ";
    
 }
    
