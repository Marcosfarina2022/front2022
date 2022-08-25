
let botonDiv = document.getElementById('botonDiv');
botonDiv.addEventListener("click", crearDiv);
nuevoDiv=document.querySelector(".estilo");


function crearDiv(){
   let itemNuevo=document.createElement("div");
    itemNuevo.innerHTML=" Div 1";
    nuevoDiv.appendChild(itemNuevo);

    let item=document.querySelector(".nuevoItem");
    item.classList.add("divAleatorio")


}
