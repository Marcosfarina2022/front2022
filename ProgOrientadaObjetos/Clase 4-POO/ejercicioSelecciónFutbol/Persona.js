"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, fecha_nacimiento, numPasaporte) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.numeroPasaporte = numPasaporte;
    }
    Persona.prototype.get_nombre = function () {
        return this.nombre;
    };
    Persona.prototype.set_nombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.get_apellido = function () {
        return this.apellido;
    };
    Persona.prototype.set_apellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.get_fecha_nacimiento = function () {
        return this.fecha_nacimiento.toString();
    };
    Persona.prototype.set_fecha_nacimiento = function (fecha_nacimiento, clave) {
        if (clave == 123)
            this.fecha_nacimiento = fecha_nacimiento;
        else
            console.log('usted no tiene la autoridad para cambiar la fecha de nacimiento');
    };
    Persona.prototype.get_NumPasaporte = function () {
        return this.numeroPasaporte;
    };
    Persona.prototype.set_NumPasaporte = function (numPasarporte) {
        this.numeroPasaporte = numPasarporte;
    };
    Persona.prototype.get_edad = function () {
        var hoy = new Date();
        return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
    };
    Persona.prototype.toString = function () {
        var respuesta = this.get_nombre() + " " + this.get_apellido() + " Pasaporte: " + this.get_NumPasaporte();
        return respuesta;
    };
    return Persona;
}());
exports.Persona = Persona;
