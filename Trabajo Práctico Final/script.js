"Use strict";
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

alert("Muchas Gracias!!!!! por enviar su consulta");
}
//Pestaña compras//

//definimos las variables y los arreglos globales//
let total=0;
let productos = ["Gaseosas","Fideos","Leche","Harina","Aceite","Arroz","Mermelada","Galletas"];
let stockCantidad = [20, 30, 10, 15, 8, 12, 5, 7];
let precioUnitario = [200, 320, 190, 85, 350, 170, 420, 245];
//Vinculamos el elemento button del html y llamamos a la función//
const btnComprar=document.getElementById("botonComprar");
btnComprar.addEventListener("click", comprarProductos);
//Creamos el documento 
const listaProd = document.getElementById("listaProductos");

function cargarAlCarrito(){
  for (let i = 0; i < stockCantidad.length; i++) {
    let divElementos = document.createElement("div");
    divElementos.classList.add("itemArticulo");
    divElementos.id = `producto-${i}`;

    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = productos[i];

    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = `$${precioUnitario[i]}`;

    let cantidadItem = document.createElement("input");
    cantidadItem.id = `cantidadItem-${i}`;
    cantidadItem.type = "number";
    cantidadItem.max = String(stockCantidad[i]);
    cantidadItem.min = "0";

    divElementos.appendChild(nombreProducto);
    divElementos.appendChild(precioProducto);
    divElementos.appendChild(cantidadItem);
    listaProd.appendChild(divElementos);
  }
};

function comprarProductos(){
  for (let i = 0; i < stockCantidad.length; i++) {
    let cantidadItem = document.getElementById(`cantidadItem-${i}`);
    let cantidadElegida = Number(cantidadItem.value);
    if (cantidadElegida > 0) {
      console.log(
        `Usted compró ${cantidadElegida} unidades de ${productos[i]}`
      );
      total += precioUnitario[i] * cantidadElegida;
    }
  }
  if (total > 0) {
    console.log(`El costo total de su compra es $${total}`);
  } else {
    console.log(`Debe seleccionar al menos un producto`);
  }
};
document.querySelector("h3").innerHTML = "Total de compra que realizó es: $ "+`${total}`;

// window.addEventListener("load", cargarProductos);
window.onload = cargarAlCarrito();
//btnAgregar?.addEventListener("click", agregar);



