/*"use strict";

let btn_Nombre = document.getElementById("btn-Nombre");
btn_nombre.addEventListener("click",mostrar);
let btn_Apellido = document.getElementById("btn-Apellido");
btn_Apellido.addEventListener("click",mostrar);
let btn_Dirección = document.getElementById("btn-Dirección");
btn_Dirección.addEventListener("click",mostrar);
let btn_Ciudad = document.getElementById("btn-Ciudad");
btn_Ciudad.addEventListener("click",mostrar);
let btn_Correo = document.getElementById("btn-Correo");
btn_Correo.addEventListener("click",mostrar);

function mostrar() {
   let nombre;
   let apellido;
   let dirección;
   let ciudad;
   let correo;
   let inputNombre= document.getElementById("imputNombre");
    nombre=inputNombre.value;
   let inputApellido= document.getElementById("imputApellido");
    apellido=inputApellido.value;
   let inputDireccion= document.getElementById("imputDirección");
    dirección=inputDireccion.value;
    let inputCiudad= document.getElementById("imputCiudad");
    ciudad=inputCiudad.value;
    let inputCorreo= document.getElementById("imputCorreo");
    correo=inputCorreo.value;
   //alert("Datos Ingresados: "+" Nombre: " +nombre + " Apellido: " +apellido + " Edad: " +dirección + "Ciudad: " +ciudad + "Mail: " + correo);
   document.getElementById("mostrar").innerHTML= " los datos ingresados son:" + nombre;
}
