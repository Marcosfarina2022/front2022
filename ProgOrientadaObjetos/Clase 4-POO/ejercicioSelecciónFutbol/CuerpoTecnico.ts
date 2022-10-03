import { SeleccionFutbol } from './SeleccionFutbol'
import { Persona } from './Persona'
export class CuerpoTecnico extends Persona{

    protected funcionEnEquipo:string;

    constructor(nombre:string,apellido:string,fecha_nacimiento:Date, numPasaporte:number,funcionEquipo:string) {
        super(nombre,apellido,fecha_nacimiento,numPasaporte);
        this.funcionEnEquipo=funcionEquipo;
        
    }
    public setFuncionEquipo(funcionEquipo: string) {
        this.funcionEnEquipo = funcionEquipo;
    }
    
    public getFuncionEquipo() : string {
        return this.funcionEnEquipo; 
    }

}