import { Persona } from './Persona';


export abstract class Cuenta{

//Atributos
protected numeroCuenta: number;
protected saldo: number;
protected cliente:Persona;
constructor(ParamNumCuenta:number, paramCliente:Persona){
    this.numeroCuenta = ParamNumCuenta;
    this.saldo = 0;
    this.cliente = paramCliente;
}

public getNumCuenta():number{
    return this.numeroCuenta;
}

public setNumCuenta(paramCuenta:number){
    this.numeroCuenta = paramCuenta;
}

public getSaldo():number{
    return this.saldo;
}

public setSaldo(paramSaldo:number):void{
    this.saldo = paramSaldo;
}
public getCliente():Persona{
    return this.cliente;
}

public setCliente(paramCliente:Persona){
    this.cliente = paramCliente;
}
public ingresar(paramIngreso:number){
this.saldo = this.saldo + paramIngreso;
}
abstract retirar(montoARetirar:number):void;
abstract actualizarSaldo():void;
}

