"use strict";
exports.__esModule = true;
var SeleccionFutbol_1 = require("./SeleccionFutbol");
var Futbolistas_1 = require("./Futbolistas");
var CuerpoMedico_1 = require("./CuerpoMedico");
var CuerpoTecnico_1 = require("./CuerpoTecnico");
var fecha = new Date("06-24-1987");
var fecha2 = new Date("05-10-2003");
var fecha3 = new Date("12-07-1998");
var fecha4 = new Date("06-24-2002");
var fecha5 = new Date("02-01-2001");
var fecha6 = new Date("05-05-1978");
var fecha7 = new Date("05-16-1978");
var fecha8 = new Date("03-23-1978");
var fecha9 = new Date("02-08-1975");
var fecha10 = new Date("11-23-1974");
var fecha11 = new Date("11-04-1972");
var jugador1 = new Futbolistas_1.Futbolista("Lionel", "Messi", fecha, 134456, "Delantero", 10, "PSG");
var jugador2 = new Futbolistas_1.Futbolista("Lautaro", "Martinez", fecha2, 230434, "Delantero", 9, "Inter Milan");
var jugador3 = new Futbolistas_1.Futbolista("Cristian", "Romero", fecha3, 192156, "Defensor", 2, "Tottenham");
var jugador4 = new Futbolistas_1.Futbolista("Angel", "DiMaria", fecha4, 178656, "Delantero", 11, "Juventus");
var jugador5 = new Futbolistas_1.Futbolista("Leandro", "Paredes", fecha5, 154356, "Mediocampista", 5, "Juventus");
var listaFutbolistas = [jugador1, jugador2, jugador3, jugador4, jugador5];
var cuerpoTecnico1 = new CuerpoTecnico_1.CuerpoTecnico("Pablo", "Aymar", fecha6, 974562, "Ayudante Campo");
var cuerpoTecnico2 = new CuerpoTecnico_1.CuerpoTecnico("Lionel", "Scaloni", fecha7, 174522, "Técnico");
var cuerpoTecnico3 = new CuerpoTecnico_1.CuerpoTecnico("Walter", "Samuel", fecha8, 274562, "Asesor Técnico");
var cuerpoTecnicoArgentino = [cuerpoTecnico1, cuerpoTecnico2, cuerpoTecnico3];
var medico1 = new CuerpoMedico_1.CuerpoMedico("Luis", "García", fecha9, 214365, "Fisioterapeuta");
var medico2 = new CuerpoMedico_1.CuerpoMedico("Rodrigo", "Barrios", fecha10, 657432, "Preparador Físico");
var medico3 = new CuerpoMedico_1.CuerpoMedico("Daniel", "Martinez", fecha11, 417621, "Médico");
var cuerpoMedicoArgentino = [medico1, medico2, medico3];
var seleccionA = new SeleccionFutbol_1.SeleccionFutbol("Seleccion Argentina", cuerpoTecnicoArgentino, listaFutbolistas, cuerpoMedicoArgentino);
console.log("SELECCIÓN ARGENTINA QUE VA A JUGAR EN CATAR 2022");
console.log(seleccionA);
//Verifico si el jugador está en la lista de la selección
var consultarJugador = seleccionA.verificarFutbolistaEnLista(jugador1);
console.log("El jugador", jugador1.toString(), "¿Está en la lista?", consultarJugador);
//ingreso un nuevo jugador y consulto si está en la lista
var fecha12 = new Date("05-24-1994");
var jugador6 = new Futbolistas_1.Futbolista("Rodrigo", "De Paul", fecha12, 555324, "Mediocampista", 8, "Atletico Madrid");
var consultarjugador2 = seleccionA.verificarFutbolistaEnLista(jugador6);
console.log("El jugador", jugador6.get_apellido(), "¿Está en la lista?", consultarjugador2);
//Ingreso al jugador a la lista y vuelvo a consultar.
seleccionA.ingresarFubolista(jugador6);
var consultarNuevamenteJugador6 = seleccionA.verificarFutbolistaEnLista(jugador6);
console.log("El jugador", jugador6.toString(), "¿Está en la lista?", consultarNuevamenteJugador6);
// Edito datos de un jugador
console.log("El jugador", jugador4.get_apellido(), "Tiene un cambio de camiseta");
jugador4.setNumCamiseta(7);
console.log(jugador4);
//Elimino un jugador de la lista
console.log("El jugador5 será eliminado de la lista por lesión");
seleccionA.borrarFutbolista(jugador5);
//Consulto si fue eliminado de la lista
var consultarjugador3 = seleccionA.verificarFutbolistaEnLista(jugador5);
console.log("El jugador", jugador5.toString(), "¿Está en la lista?", consultarjugador3);
