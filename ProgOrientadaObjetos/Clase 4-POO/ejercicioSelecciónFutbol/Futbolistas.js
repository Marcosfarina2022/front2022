"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Futbolista = void 0;
var Persona_1 = require("./Persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, fecha_nacimiento, numPasaporte, puestoJugador, numeroCam, clubOrigen) {
        var _this = _super.call(this, nombre, apellido, fecha_nacimiento, numPasaporte) || this;
        _this.puesto = puestoJugador;
        _this.numeroCamiseta = numeroCam;
        _this.clubDeOrigen = clubOrigen;
        return _this;
    }
    Futbolista.prototype.setPuesto = function (puestoJ) {
        this.puesto = puestoJ;
    };
    Futbolista.prototype.getPuesto = function () {
        return this.puesto;
    };
    Futbolista.prototype.setNumCamiseta = function (nCamiseta) {
        this.numeroCamiseta = nCamiseta;
    };
    Futbolista.prototype.getNumCamista = function () {
        return this.numeroCamiseta;
    };
    Futbolista.prototype.setClubOrigen = function (cOrigen) {
        this.clubDeOrigen = cOrigen;
    };
    Futbolista.prototype.getclubOrigen = function () {
        return this.clubDeOrigen;
    };
    return Futbolista;
}(Persona_1.Persona));
exports.Futbolista = Futbolista;
