export class Persona {

    protected nombre:string;
    protected apellido:string;
    protected dni:number;
    
    constructor(nombre:string,apellido:string, documento:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = documento;
          
    }
    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setApellido(apellido:string){
        this.apellido = apellido;
    }
    public getDni():number{
        return this.dni;
    }

    public setDni(Dni:number){
        this.dni = Dni;
    }
    public nombreCliente():string {
        let nombreCompleto:string = this.nombre +' '+this.apellido;
        return nombreCompleto;
    }
}
