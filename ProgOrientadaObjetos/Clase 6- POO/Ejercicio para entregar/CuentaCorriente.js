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
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(paramNumCuenta, paramCliente) {
        return _super.call(this, paramNumCuenta, paramCliente) || this;
    }
    CuentaCorriente.prototype.retirar = function (montoARetirar) {
        if (this.saldo > montoARetirar) {
            this.saldo = this.saldo - montoARetirar;
            console.log("El retiro fue de:", montoARetirar);
        }
        else {
            console.log("Saldo insuficiente", "no puede retirar la cantidad de: ", montoARetirar);
        }
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * 1.015;
    };
    CuentaCorriente.prototype.toString = function () {
        return ("Cliente: " + this.cliente.nombreCliente() + "\n" + " Numero de Cuenta " + this.numeroCuenta + "\n" + " saldo final: " + " - " + this.saldo);
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
