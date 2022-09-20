//  Ejercicio de funcionamiento de un Microondas

class Microondas {
    //atributos
    private prendido: boolean;
    private marca: string;
    private serie:number;
    private opcion: number;
    //funcionalidades
    constructor(m: string, s:number, o:number) {
        this.marca=m;
        this.serie=s;
        this.prendido= false;
        this.opcion=o;   
    }
    
    public setMarca(marcaMicro : string) {
        this.marca = marcaMicro;
    }
    
    public getMarca() : string {
        return this.marca;
    }

    public setSerie(serieMicro : number) {
        this.serie = serieMicro;
    }
    
    public getSerie() : number {
        return this.serie;
    }
    
    estaPrendido(): boolean{
        if (this.prendido==false) { 
         this.prendido= true;
        }else{
        this.prendido=false;
    }
        return this.prendido;
    }

    programar():string{
        let programa:string;
        if (this.opcion==1 && this.prendido==true) {
            programa="correcta";
        }else{
            programa="invalida o microondas apagado"
        }
        return programa;    
    }    
    calentar(orden: string): string{
        if (this.opcion==1 && this.prendido==true) {
         orden="calentar comida";   
        }
        else{
        orden="no se puede calentar la comida";
        }
       return orden;       
    }    
}

let micro= new Microondas("samsungs",37890456,1);
console.log("Marca:",micro.getMarca());
console.log("Serie",micro.getSerie());
console.log("¿El microondas está prendido?",micro.estaPrendido());
console.log("opción elegida:",micro.programar());
console.log(micro.calentar("calentar comida"));