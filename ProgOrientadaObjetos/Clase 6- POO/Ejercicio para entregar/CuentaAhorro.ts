import { Cuenta} from './Cuenta';
import { Persona} from './Persona';


export class CuentaAhorro extends Cuenta{

    protected interesVariable:number;
    protected saldoMinimo:number;

    constructor(paramNumCuenta:number,paramCliente:Persona, intVariable:number){
    super(paramNumCuenta,paramCliente)

        this.saldoMinimo = 50000;
        this.interesVariable = intVariable;
    }

    public getSaldoMinimo(): number{
        return this.saldoMinimo;
    }
    public setSaldoMinimo(paramSaldoMin:number): void{
        this.saldoMinimo = paramSaldoMin;
    }

   public setInteresVariable(paramInteresVar:number):void{
        this.interesVariable = paramInteresVar;
    }
   public getInteresVariable():number{
        return this.interesVariable;
    }

    retirar(montoARetirar:number): void {
        let auxiliar = this.saldo - this.saldoMinimo;
        if(auxiliar > montoARetirar ){
            this.saldo = this.saldo - montoARetirar;
            console.log("El monto retirado es:", montoARetirar);  
        }else{
            console.log("Fondos insuficientes,No puede retirar la cantidad de:", montoARetirar);
        }
    }

    actualizarSaldo():void {
        this.saldo = this.saldo * this.interesVariable;
        
    }
    public toString():string{
        return "Cliente: " + this.cliente.nombreCliente() + "\n" + "Numero de Cuenta " + this.numeroCuenta + "\n" + "Saldo final : " + this.saldo;
    }

}