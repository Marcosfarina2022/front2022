//Pestaña Contactos//
let boton=document.getElementById("botonEnviar");
boton.addEventListener("click",enviarDatos);

function enviarDatos() {
let nombre;
let email;
let texto;
let inputNombre=document.getElementById("inputNombre");
nombre=inputNombre.value;
let inputEmail=document.getElementById("inputEmail");
email=inputEmail.value;
console.log("Los datos ingresados son: ", +nombre,+email);
alert("Muchas Gracias!!!!! por enviar su consulta");

}