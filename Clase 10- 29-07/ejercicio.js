
//Agrega elementos a una lista

let btnLista = document.getElementById("btnLista");
btnLista.addEventListener("click", agregarALista);

function agregarALista(){
    let inputNuevo = document.getElementById("inputNuevo");
    let nuevaViñeta=document.querySelector("ol");
    let elemento = document.createElement("li");
    elemento.innerHTML = inputNuevo.value;
    nuevaViñeta.appendChild(elemento);
}

// Agrega un párrafo

let btnParrafo = document.getElementById("btnParrafo");
btnParrafo.addEventListener("click", agregarParrafo);

function agregarParrafo() {
    let nuevoParrafo=document.getElementById("nuevoParrafo");
    let parrafo=document.createElement("p");
    let ingreseParrafo = document.getElementById("ingreseParrafo");
    parrafo.innerHTML=ingreseParrafo.value;
    nuevoParrafo.appendChild(parrafo);

}