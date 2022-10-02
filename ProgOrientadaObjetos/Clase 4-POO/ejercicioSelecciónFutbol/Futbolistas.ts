
import { SeleccionFutbol } from "./SeleccionFutbol";
import { Persona } from "./Persona";


export class Futbolista extends Persona{
   
    protected puesto:string;
    protected numeroCamiseta:number;
    protected clubDeOrigen:string;
    
    constructor(nombre:string,apellido:string,fecha_nacimiento:Date, numPasaporte:number,puestoJugador:string,numeroCam:number, clubOrigen:string){
        super(nombre,apellido,fecha_nacimiento,numPasaporte)
    
        this.puesto=puestoJugador;        
        this.numeroCamiseta=numeroCam;
        this.clubDeOrigen=clubOrigen;
    }
        public setPuesto(puestoJ: string) {
            this.puesto = puestoJ;
        }
        
        public getPuesto() : string {
            return this.puesto; 
        }
        public setNumCamiseta(nCamiseta: number) {
            this.numeroCamiseta = nCamiseta;
        }
        
        public getNumCamista() : number {
            return this.numeroCamiseta; 
        }
        public setClubOrigen(cOrigen: string) {
            this.clubDeOrigen= cOrigen;
        }
        
        public getclubOrigen() : string {
            return this.clubDeOrigen; 
        }
}

