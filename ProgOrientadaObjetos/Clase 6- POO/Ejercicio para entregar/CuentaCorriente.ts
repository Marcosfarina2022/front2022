import { Cuenta} from './Cuenta';
import { Persona} from './Persona';

export class CuentaCorriente extends Cuenta{
   
    constructor(paramNumCuenta:number,paramCliente:Persona){
    super(paramNumCuenta,paramCliente)
        
    }

    retirar(montoARetirar:number):void{    

        if (this.saldo > montoARetirar) {
            this.saldo = this.saldo - montoARetirar;
            console.log("El retiro fue de:",montoARetirar);   
        } else {
            console.log("Saldo insuficiente","no puede retirar la cantidad de: ",montoARetirar);          
        }
        
    }
    actualizarSaldo():void {

        this.saldo = this.saldo * 1.015;
        
    }
    public toString():string{
        return ("Cliente: " + this.cliente.nombreCliente() + "\n" + " Numero de Cuenta " + this.numeroCuenta + "\n" + " saldo final: " + " - " + this.saldo);
    }

}