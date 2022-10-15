"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(ParamNumCuenta, paramCliente) {
        this.numeroCuenta = ParamNumCuenta;
        this.saldo = 0;
        this.cliente = paramCliente;
    }
    Cuenta.prototype.getNumCuenta = function () {
        return this.numeroCuenta;
    };
    Cuenta.prototype.setNumCuenta = function (paramCuenta) {
        this.numeroCuenta = paramCuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setSaldo = function (paramSaldo) {
        this.saldo = paramSaldo;
    };
    Cuenta.prototype.getCliente = function () {
        return this.cliente;
    };
    Cuenta.prototype.setCliente = function (paramCliente) {
        this.cliente = paramCliente;
    };
    Cuenta.prototype.ingresar = function (paramIngreso) {
        this.saldo = this.saldo + paramIngreso;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
