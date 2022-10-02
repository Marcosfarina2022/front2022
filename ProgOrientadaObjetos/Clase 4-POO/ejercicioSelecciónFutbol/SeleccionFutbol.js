"use strict";
exports.__esModule = true;
exports.SeleccionFutbol = void 0;
var SeleccionFutbol = /** @class */ (function () {
    function SeleccionFutbol(nomSeleccion, listaEntrenadores, listaFutbolistas, listaMedicos) {
        this.nombreSeleccion = nomSeleccion;
        this.listadoEntrenadores = listaEntrenadores;
        this.listadoFutbolistas = listaFutbolistas;
        this.listadoMedicos = listaMedicos;
    }
    SeleccionFutbol.prototype.verificarFutbolistaEnLista = function (parametroFutbolista) {
        var posicionArreglo = false;
        for (var i = 0; i < this.listadoFutbolistas.length; i++) {
            if (this.listadoFutbolistas[i].get_NumPasaporte() === parametroFutbolista.get_NumPasaporte()) {
                posicionArreglo = true;
            }
        }
        return posicionArreglo;
    };
    SeleccionFutbol.prototype.ingresarFubolista = function (parametroFutbolista) {
        this.listadoFutbolistas.push(parametroFutbolista);
    };
    SeleccionFutbol.prototype.borrarFutbolista = function (parametroFutbolista) {
        for (var i = 0; i < this.listadoFutbolistas.length; i++) {
            if (this.listadoFutbolistas[i].get_apellido() === parametroFutbolista.get_apellido()) {
                this.listadoFutbolistas.splice(i, 1);
            }
        }
    };
    SeleccionFutbol.prototype.editarListaSeleccion = function (pos, apellido) {
        this.listadoFutbolistas[pos].set_apellido(apellido);
    };
    return SeleccionFutbol;
}());
exports.SeleccionFutbol = SeleccionFutbol;
