import { Persona } from './Persona';
import { Cuenta} from './Cuenta';
import { CuentaAhorro} from './CuentaAhorro';
import { CuentaCorriente} from './CuentaCorriente';

let cliente1:Persona = new Persona("Esteban","Rodriguez",1212378);
let cliente2: Persona = new Persona("Cecilia","Velazque",30407895);
let cliente3: Persona = new Persona("Rodrigo","Cáceres",26623419);
let arregloCliente:Persona[] = [cliente1,cliente2,cliente3];

let cuenta1:CuentaAhorro = new CuentaAhorro(1122344,cliente1,0.2);
let cuenta2:CuentaAhorro = new CuentaAhorro(9874563,cliente2,1.3);
let cuenta3:CuentaAhorro= new CuentaAhorro(3784567,cliente3,1.2);
let cuentaAhorroClientes:CuentaAhorro[] = [cuenta1,cuenta2,cuenta3];

let cuentaCorr1:CuentaCorriente = new CuentaCorriente(324568,cliente1);
let cuentaCorr2:CuentaCorriente = new CuentaCorriente(197852,cliente2);
let cuentaCorr3:CuentaCorriente = new CuentaCorriente(214365,cliente3);
let cuentaCorrienteClientes:CuentaCorriente[] = [cuentaCorr1,cuentaCorr2,cuentaCorr3];
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
console.log("El saldo final aplicando el 1.5% de interes es de :" ,cuentaCorr1.getSaldo());

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
//Podemos ver aca como cobra el interés varaiable en base a lo retirado.
console.log(cuenta3.getSaldo());











