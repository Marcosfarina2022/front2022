//  Ejercicio de funcionamiento de un Microondas

class microondas {
    //atributos
    prendido: boolean;
    marca: string;
    serie:number;
    opcion: number;
    //funcionalidades
    constructor(m: string, s:number, o:number) {
        this.marca=m;
        this.serie=s;
        this.prendido= false;
        this.opcion=o;   
    }
    obtenerDatos(){
        console.log("La marca del microondas es",this.marca,"y","su numero de serie es:", this.serie);
    }

    prender(){
        if (this.prendido==false) {
            console.log("Debes prender el microondas para comenzar a utilizarlo");  
            this.prendido= true;
            console.log("El dispositivo está prendido, el microondas está listo para utilizarlo");
        } 
    }

    programar(){
        console.log("marcá la opción para calentar la comida"," ", this.opcion);
    }    
    calentar(){
        
        console.log("La comida ya empezó a calentarse");        
    }    
}

let micro= new microondas("samsungs",37890456,1);
micro.obtenerDatos();
micro.prender();
micro.programar();
micro.calentar();

// funcionalidades
    //programar
    //calentar comida
    //cocinar comida
    //Descongelar comida

//Estados
    // Prendido
    //Apagado
    //En reposo
    //marca
    //serie
    //opcion