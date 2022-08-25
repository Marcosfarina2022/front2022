"use script";

let resultado=0;
let numero1=0;
let numero2=0;
let botonSumar=document.getElementById("sumar");
boton.addEventListener("click", realizarSuma);
let botonRestar=document.getElementById("restar");
botonRestar.addEventListener("click",realizarResta)

function realizarSuma() {
    let numeroUno= parseInt(document.getElementById("numeroUno")).value;
    let numeroDos= parseInt(document.getElementById("numeroDos")).value
    document.getElementById("resultadoFinal").innerHTML = "El resultado de la suma es: ", numeroUno + numeroDos;      
 }

function realizarResta() {
    resta = resta + parseInt((numero1 - numero2)); 
    document.getElementById("resultadoFinal").innerHTML = "El resultado de la resta es:" + resta; 
}
      
