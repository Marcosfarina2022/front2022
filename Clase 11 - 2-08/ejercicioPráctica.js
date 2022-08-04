
let contador=0;
let botonSuma=document.getElementById("sumaClicks");
botonSuma=document.addEventListener("clicks",sumarClicks);

let botonResta=document.getElementById("restaClicks");
botonResta=document.addEventListener("clicks",restarClicks);

let botonMostrar=document.getElementById("muestraClicks");
botonMostrar=document.addEventListener("clicks",mostrarClicks);


function sumarClicks() {
    contador++;
    document.querySelector("h2").innerHTML= contador;
}
function restarClicks() {
    contador--;
    document.querySelector("h2").innerHTML= contador;
}
function mostrarClicks() {
    document.querySelector("h2").innerHTML= contador;
}

