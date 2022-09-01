"Use strict";

//definimos las variables y los arreglos globales//
let total=0;
let productos = ["Gaseosas","Fideos","Leche","Harina","Aceite","Arroz","Mermelada"];
let stockCantidad = [20, 30, 10, 15, 8, 12, 5];
let precioUnitario = [200, 320, 190, 85, 350, 170, 420];
//Vinculamos el elemento button del html y llamamos a la función//
const btnComprar=document.getElementById("botonComprar");
btnComprar.addEventListener("click", comprarProductos);
//Creamos el documento 
const listaProd = document.getElementById("listaProductos");

//Llamamos a la función donde cargamos los imputs y los datos
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
}
//Efectuamos el cálculo de la compra y realizamos la validación.
function comprarProductos(){
  for (let i = 0; i < stockCantidad.length; i++) {
    let cantidadItem = document.getElementById(`cantidadItem-${i}`);
    let cantidadElegida = Number(cantidadItem.value);
    if (cantidadElegida > 0) {
      console.log(
        `Usted compró ${cantidadElegida} unidad/es de ${productos[i]} a un precio de ${precioUnitario[i]} pesos, por cada unidad`
      );
      total += precioUnitario[i] * cantidadElegida;
    }
  }
  if (total > 0) {
    console.log(`El costo total de su compra es $${total}`);
  } else {
    console.log(`Debe seleccionar al menos un producto`);
  }
  document.querySelector("h3").innerHTML = "El total de compra que realizó en el mercado es: $ "+`${total}`;
};

window.onload = cargarAlCarrito();



