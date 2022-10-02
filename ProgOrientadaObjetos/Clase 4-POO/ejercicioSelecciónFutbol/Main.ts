import { SeleccionFutbol } from "./SeleccionFutbol";
import { Futbolista } from "./Futbolistas";
import { Persona } from "./Persona";
import { CuerpoMedico } from "./CuerpoMedico";
import { CuerpoTecnico } from "./CuerpoTecnico";


let fecha = new Date("06-24-1987");
let fecha2= new Date("05-10-2003");
let fecha3= new Date("12-07-1998");
let fecha4= new Date("06-24-2002");
let fecha5= new Date("02-01-2001");
let fecha6= new Date("05-05-1978");
let fecha7= new Date("05-16-1978");
let fecha8= new Date("03-23-1978");
let fecha9= new Date("02-08-1975");
let fecha10= new Date("11-23-1974");
let fecha11= new Date("11-04-1972");


let jugador1:Futbolista= new Futbolista ("Lionel","Messi",fecha,134456,"Delantero",10,"PSG");
let jugador2:Futbolista= new Futbolista ("Lautaro","Martinez",fecha2,230434,"Delantero",9,"Inter Milan");
let jugador3:Futbolista= new Futbolista ("Cristian","Romero",fecha3,192156,"Defensor",2,"Tottenham");
let jugador4:Futbolista= new Futbolista ("Angel","DiMaria",fecha4,178656,"Delantero",11,"Juventus");
let jugador5:Futbolista= new Futbolista ("Leandro","Paredes",fecha5,154356,"Mediocampista",5,"Juventus");

let listaFutbolistas: Futbolista[]=[jugador1,jugador2,jugador3,jugador4,jugador5];
let cuerpoTecnico1:CuerpoTecnico = new CuerpoTecnico("Pablo","Aymar",fecha6,974562,"Ayudante Campo");
let cuerpoTecnico2:CuerpoTecnico = new CuerpoTecnico("Lionel","Scaloni",fecha7,174522,"Técnico");
let cuerpoTecnico3:CuerpoTecnico = new CuerpoTecnico("Walter","Samuel",fecha8,274562,"Asesor Técnico");
let cuerpoTecnicoArgentino:CuerpoTecnico[]=[cuerpoTecnico1,cuerpoTecnico2,cuerpoTecnico3]
let medico1:CuerpoMedico = new CuerpoMedico("Luis", "García", fecha9,214365,"Fisioterapeuta");
let medico2:CuerpoMedico = new CuerpoMedico("Rodrigo", "Barrios", fecha10,657432,"Preparador Físico");
let medico3:CuerpoMedico = new CuerpoMedico("Daniel", "Martinez", fecha11,417621,"Médico");
let cuerpoMedicoArgentino:CuerpoMedico[]=[medico1,medico2,medico3];

let seleccionA:SeleccionFutbol = new SeleccionFutbol("Seleccion Argentina",cuerpoTecnicoArgentino,listaFutbolistas,cuerpoMedicoArgentino);
console.log("SELECCIÓN ARGENTINA QUE VA A JUGAR EN CATAR 2022");
//Muestro todos los integrantes de la selección de futbol
console.log(seleccionA);

//Verifico si un jugador está en la lista de la selección
let consultarJugador: boolean = seleccionA.verificarFutbolistaEnLista(jugador1);
console.log("El jugador",jugador1.toString(),"¿Está en la lista?",consultarJugador);

//ingreso un nuevo jugador y consulto si está en la lista
let fecha12= new Date("05-24-1994");
let jugador6:Futbolista = new Futbolista("Rodrigo","De Paul",fecha12,555324,"Mediocampista",8,"Atletico Madrid");
let consultarjugador2: boolean = seleccionA.verificarFutbolistaEnLista(jugador6);
console.log("El jugador",jugador6.get_apellido(),"¿Está en la lista?",consultarjugador2);

//Ingreso al jugador a la lista y vuelvo a consultar.
seleccionA.ingresarFubolista(jugador6);
let consultarNuevamenteJugador6:boolean = seleccionA.verificarFutbolistaEnLista(jugador6)
console.log("El jugador",jugador6.toString(),"¿Está en la lista?",consultarNuevamenteJugador6);

// Edito datos de un jugador
console.log("El jugador",jugador4.get_apellido(),"Tiene un cambio de camiseta");
jugador4.setNumCamiseta(7);
console.log(jugador4);

//Elimino un jugador de la lista
console.log("El jugador5 será eliminado de la lista por lesión");
seleccionA.borrarFutbolista(jugador5);

//Consulto si fue eliminado de la lista
let consultarjugador3: boolean = seleccionA.verificarFutbolistaEnLista(jugador5);
console.log("El jugador",jugador5.toString(),"¿Está en la lista?",consultarjugador3);
