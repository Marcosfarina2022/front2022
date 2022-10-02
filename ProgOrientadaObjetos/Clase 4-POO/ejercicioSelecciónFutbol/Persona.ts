export class Persona {

    protected nombre:string;
    protected apellido:string;
    protected fecha_nacimiento:Date;
    protected numeroPasaporte:number;
    
    constructor(nombre:string,apellido:string,fecha_nacimiento:Date, numPasaporte:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.numeroPasaporte = numPasaporte;
        
    }

    get_nombre():string{
        return this.nombre;
    }

    set_nombre(nombre:string){
        this.nombre = nombre;
    }

    get_apellido():string{
        return this.apellido;
    }

    set_apellido(apellido:string){
        this.apellido = apellido;
    }

    get_fecha_nacimiento():string{
        return this.fecha_nacimiento.toString();
    }

    set_fecha_nacimiento(fecha_nacimiento:Date,clave:number){
        if(clave == 123)
            this.fecha_nacimiento = fecha_nacimiento;
        else
            console.log('usted no tiene la autoridad para cambiar la fecha de nacimiento')
    }

    get_NumPasaporte():Number{
        return this.numeroPasaporte;
    }

    set_NumPasaporte(numPasarporte:number){
        this.numeroPasaporte = numPasarporte;
    }

   

    get_edad():number{
        let hoy:Date = new Date();
        return  hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
    }

    toString():string{
        let respuesta:string = this.get_nombre() + " " +this.get_apellido()+ " Pasaporte: " + this.get_NumPasaporte();
        return respuesta;
    }
}
