import { interfacePersona } from "./interfazPersona";

export class Persona implements interfacePersona {

    protected nombre:string;
    protected apellido:string;
    
    constructor(paramNombre:string,paramApellido:string){
        this.nombre = paramNombre;
        this.apellido = paramApellido;
          
    }
    public getNombre():string{
        return this.nombre;
    }

    public setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setApellido(paramApellido:string):void{
        this.apellido = paramApellido;
    }
    public getNombreCompleto():string{
        let aux = this.nombre + this.apellido;
        return aux;
    
}

}
