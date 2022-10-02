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
exports.CuerpoMedico = void 0;
var Persona_1 = require("./Persona");
var CuerpoMedico = /** @class */ (function (_super) {
    __extends(CuerpoMedico, _super);
    function CuerpoMedico(nombre, apellido, fecha_nacimiento, numPasaporte, especialidad) {
        var _this = _super.call(this, nombre, apellido, fecha_nacimiento, numPasaporte) || this;
        _this.especialidad = especialidad;
        return _this;
    }
    CuerpoMedico.prototype.setEspecialidad = function (especialidadMedica) {
        this.especialidad = especialidadMedica;
    };
    CuerpoMedico.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    return CuerpoMedico;
}(Persona_1.Persona));
exports.CuerpoMedico = CuerpoMedico;
