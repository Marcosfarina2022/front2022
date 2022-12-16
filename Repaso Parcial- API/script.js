"use strict"
let empleadoTabla  = document.getElementById("table");


async function obtenerDatos(){
    console.log("Buscando Nombre");
    let res =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users");
    let data = await res.json();
    console.log(data);
    data.forEach(element => {
        document.getElementById("table").innerHTML+=`  <tr>
                                                            <td>${element.nombre}</td>

    }
}
