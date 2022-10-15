"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var CuentaAhorro_1 = require("./CuentaAhorro");
var CuentaCorriente_1 = require("./CuentaCorriente");
var cliente1 = new Persona_1.Persona("Esteban", "Rodriguez", 1212378);
var cliente2 = new Persona_1.Persona("Cecilia", "Velazque", 30407895);
var cliente3 = new Persona_1.Persona("Rodrigo", "Cáceres", 26623419);
var arregloCliente = [cliente1, cliente2, cliente3];
var cuenta1 = new CuentaAhorro_1.CuentaAhorro(1122344, cliente1, 0.2);
var cuenta2 = new CuentaAhorro_1.CuentaAhorro(9874563, cliente2, 1.3);
var cuenta3 = new CuentaAhorro_1.CuentaAhorro(3784567, cliente3, 1.2);
var cuentaAhorroClientes = [cuenta1, cuenta2, cuenta3];
var cuentaCorr1 = new CuentaCorriente_1.CuentaCorriente(324568, cliente1);
var cuentaCorr2 = new CuentaCorriente_1.CuentaCorriente(197852, cliente2);
var cuentaCorr3 = new CuentaCorriente_1.CuentaCorriente(214365, cliente3);
var cuentaCorrienteClientes = [cuentaCorr1, cuentaCorr2, cuentaCorr3];
//let cuentasCorrientes: CuentaCorriente = new CuentaCorriente(cuentaCorrienteClientes);
console.log(".........................................");
//Chequeamos una caja de ahorro de un cliente que está en 0 actualmente.
console.log(cuenta1.toString());
//ingresamos saldo a una cuenta corriente
cuentaCorr1.ingresar(300000);
//Muestro el saldo de la cuenta
console.log(cuentaCorr1.getSaldo());
//Pruebo retirar mas de la cantidad que tengo en la cuenta y me indica que no tengo fondos suficientes.
cuentaCorr1.retirar(40000);
//Actualizamos los saldos
cuentaCorr1.actualizarSaldo();
//Chequeamos que al saldo que quedó por el retiro le suma el 1.5%
console.log("El saldo final aplicando el 1.5% de interes es de :", cuentaCorr1.getSaldo());
console.log("...........................................");
//Ingresamos valores a las Cuentas de Ahorro.
cuenta1.ingresar(20000);
cuenta2.ingresar(30000);
cuenta3.ingresar(100000);
//Mostramos todas las cuentas de ahorro.
console.log(cuentaAhorroClientes);
//intemamos retirar mas plata que el saldo mínimo de una cuenta
cuenta3.retirar(1000);
cuenta3.actualizarSaldo();
console.log(cuenta3.getSaldo());
