import { SeleccionFutbol } from "./SeleccionFutbol";
import { Persona } from "./Persona";

export class CuerpoMedico extends Persona{
    protected especialidad:string;

    constructor(nombre:string,apellido:string,fecha_nacimiento:Date, numPasaporte:number,especialidad:string,) {
        super(nombre,apellido,fecha_nacimiento,numPasaporte);
        this.especialidad=especialidad;
        
    }
    public setEspecialidad(especialidadMedica: string) {
        this.especialidad= especialidadMedica;
    }
    
    public getEspecialidad() : string {
        return this.especialidad; 
    }
    
}