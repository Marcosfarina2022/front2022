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
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(paramNumCuenta, paramCliente, intVariable) {
        var _this = _super.call(this, paramNumCuenta, paramCliente) || this;
        _this.saldoMinimo = 50000;
        _this.interesVariable = intVariable;
        return _this;
    }
    CuentaAhorro.prototype.getSaldoMinimo = function () {
        return this.saldoMinimo;
    };
    CuentaAhorro.prototype.setSaldoMinimo = function (paramSaldoMin) {
        this.saldoMinimo = paramSaldoMin;
    };
    CuentaAhorro.prototype.setInteresVariable = function (paramInteresVar) {
        this.interesVariable = paramInteresVar;
    };
    CuentaAhorro.prototype.getInteresVariable = function () {
        return this.interesVariable;
    };
    CuentaAhorro.prototype.retirar = function (montoARetirar) {
        var auxiliar = this.saldo - this.saldoMinimo;
        if (auxiliar > montoARetirar) {
            this.saldo = this.saldo - montoARetirar;
            console.log("El monto retirado es:", montoARetirar);
        }
        else {
            console.log("Fondos insuficientes,No puede retirar la cantidad de:", montoARetirar);
        }
    };
    CuentaAhorro.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interesVariable;
    };
    CuentaAhorro.prototype.toString = function () {
        return "Cliente: " + this.cliente.nombreCliente() + "\n" + "Numero de Cuenta " + this.numeroCuenta + "\n" + "Saldo final : " + this.saldo;
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
