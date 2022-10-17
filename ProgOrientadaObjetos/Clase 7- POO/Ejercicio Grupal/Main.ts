import { Animal } from "./Animal";
import { ListaDeAnimales } from "./ListaDeAnimales";
import { Gato } from "./Gato";
import { Pez } from "./Pez";
import { Araña } from "./Araña";

let animal1: Gato = new Gato("Kitty", 4);
let animal2: Pez = new Pez("Fish", 0);
let animal3: Araña = new Araña(8);
let animal4: Gato = new Gato("K", 4);

let arrayAnimales: Animal[] = [animal1, animal2, animal3];
let listadoA: ListaDeAnimales = new ListaDeAnimales(arrayAnimales);

listadoA.buscar(animal4);
//Buscamos el animial 4
console.log(listadoA.buscar(animal4));
//Agregamos el animal 4
listadoA.agregarAnimal(animal4);
console.log(listadoA);
//Eliminamos el animal 1
listadoA.removerAnimal(animal1);
//Mostramos el listado de animales
console.log(listadoA);