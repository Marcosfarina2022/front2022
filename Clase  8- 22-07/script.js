"use strict";

let btn_nombre = document.getElementById("btn-nombre");
btn_nombre.addEventListener("click",mostrar);
let btn_apellido = document.getElementById("btn-apellido");
btn_apellido.addEventListener("click",mostrar);
let btn_edad = document.getElementById("btn-edad");
btn_edad.addEventListener("click",mostrar);

function mostrar() {
   let nombre;
   let apellido;
   let edad;
   let inputNombre= document.getElementById("imputNombre")
    nombre=inputNombre.value;
   let inputApellido= document.getElementById("imputApellido")
    apellido=inputApellido.value;
   let inputEdad= document.getElementById("imputEdad")
    edad=inputEdad.value;
   alert("Datos Ingresados: "+" Nombre: " +nombre + " Apellido: " +apellido + " Edad: " +edad);
}
