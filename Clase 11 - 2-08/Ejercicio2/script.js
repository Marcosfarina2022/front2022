let botonToggle=document.getElementById("toogleButton");
botonToggle=document.addEventListener("click",toggleButton);
let parrafo=document.getElementById("miParrafo");

parrafo.classList.add("colorAzul");

function toggleButton() {
    document.querySelector("div").classList.toggle("ocultar");

}

