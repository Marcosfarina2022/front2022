//Pestaña Contactos//
let boton=document.getElementById("botonEnviar");
boton.addEventListener("click",cargarDatos);

function cargarDatos() {
let nombre;
let email;
let texto;
let inputNombre=document.getElementById("inputNombre");
nombre=inputNombre.value;
let inputEmail=document.getElementById("inputEmail");
email=inputEmail.value;
let mensaje=document.getElementById("mensaje");
texto=mensaje.value;
if (nombre != "" && email != "" && texto!= "") {
    alert("Muchas Gracias!!!!! por enviar su consulta, le responderemos a la brevedad");
}
}


