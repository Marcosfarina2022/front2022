"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, documento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = documento;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (Dni) {
        this.dni = Dni;
    };
    Persona.prototype.nombreCliente = function () {
        var nombreCompleto = this.nombre + ' ' + this.apellido;
        return nombreCompleto;
    };
    return Persona;
}());
exports.Persona = Persona;
