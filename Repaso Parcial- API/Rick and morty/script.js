async function obtenerDatos(){
    console.log("Buscando Nombre");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    console.log(data);
    data.results.forEach(element => {
        document.getElementById("table").innerHTML+=`  <tr>
                                                            <td>${element.name}</td>
                                                            <td>${element.status}</td>
                                                            <td><img src="${element.image}"></td>
                                                            <td><button class="delete" id="btnEliminar"'+" value="+ idBook[i] +"'>Eliminar</button></td>
                                                        </tr>`
   });
}
  
obtenerDatos();