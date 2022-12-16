async function obtenerDatos(){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    let datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>
             <td>${element.nombre} ${element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`      
    
   });

   let btn = document.querySelectorAll(".ver");
   btn.forEach(item => {
    item.addEventListener('click', (e) => {
        mostrarUno(e.target.id);
    });
   })

} 

let datos={
"nombre":"Marcos",
"apellido":"Farina",
"area":"Data Base",
"domicilio":"Peru 986 RG",
"foto":"https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/10/633f155d0cd71_1200.jpg",
"id":"21"
}
async function modificarDatos(datos){
    const res = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+datos.id, {
    method: "PUT",
    body:JSON.stringify(datos),
    headers:{"content-type":"application/json"}   
    });
    const data = await res.json();
    console.log(data);
}

async function mostrarUno(id){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id);
    let datos = await respuesta.json();
    console.log(datos);

    let datosEmpleado = document.getElementById("datosEmpleado");
    datosEmpleado.innerHTML = "";
    let imagenEmpleado = document.getElementById("imagenEmpleado");
    imagenEmpleado.innerHTML = "";

    let nombreCompleto = document.createElement("h4");
    nombreCompleto.innerHTML = datos.nombre +" "+ datos.apellido;
    let area= document.createElement("h4");
    area.innerHTML = datos.area;

    let domicilio= document.createElement("h4");
    domicilio.innerHTML = datos.domicilio;

    let foto = document.createElement("h4");
    foto.innerHTML = `<img src="${datos.foto}"></img>`

    
    datosEmpleado.appendChild(nombreCompleto);
    datosEmpleado.appendChild(area);
    datosEmpleado.appendChild(domicilio);
    imagenEmpleado.appendChild(foto);

}

obtenerDatos();
modificarDatos(datos);
