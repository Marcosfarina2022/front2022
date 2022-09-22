class Auto{

    private marca:string;
    private modelo:string;
    private patente:string;

    constructor(marcaAuto:string,modeloAuto:string,patenteAuto:string){

        this.marca=marcaAuto;
        this.modelo=modeloAuto;
        this.patente=patenteAuto;
    }

  
        public setMarca(marcaA: string) {
            this.marca = marcaA;
        }
        
        public getMarca() : string {
            return this.marca; 
        }
        public setModelo(modeloA: string) {
            this.modelo = modeloA;
        }
        
        public getModelo() : string {
            return this.modelo; 
        }
        public setPatente(patenteA: string) {
            this.patente = patenteA;
        }
        
        public getPatente() : string {
            return this.patente; 
        }
}

class RegistroAutomotor {
    private listadoAutos: Auto[];
    constructor(listaAutos:Auto[]) {
        this.listadoAutos=listaAutos;
        
    }
    verificarSiExisteElVehiculo(parametroAuto:Auto): boolean{
        let posicionArreglo: boolean = false;
        
        for (let i:number = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() === parametroAuto.getPatente()) {
                posicionArreglo = true
            }
        }
            return posicionArreglo;
    }
    registrarVehiculo(parametroAuto:Auto):void{
        
        this.listadoAutos.push(parametroAuto);

    }

    borrarVehiculo(parametroAuto:Auto): void{
        for (let i:number = 0; i < this.listadoAutos.length; i++) {

            if (this.listadoAutos[i].getPatente() === parametroAuto.getPatente()) {

             this.listadoAutos.splice(i,1);
            }

        }
    }
    editarVehiculo(pos:number, patenteA:string):void{
        this.listadoAutos[pos].setPatente(patenteA);
    
    }
}
let auto1:Auto= new Auto("Ford Fiesta","kinetic","AAty23");
let auto2:Auto= new Auto("fiat","Punto","AAdf22");
let auto3:Auto= new Auto("Chevrolet","cruce","AAtg34");
let auto4:Auto= new Auto("Toyota","Corolla","AAlf12");
let arregloAutosTDF: Auto[]=[auto1,auto2,auto3,auto4];
let registroRioGrandeTDF:RegistroAutomotor= new RegistroAutomotor(arregloAutosTDF);
//Verifico si el vehículo uno está registrado
let consultarRegistroVehiculo: boolean = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto1);
console.log("El vehiculo 1",auto1,"¿Está registrado?",consultarRegistroVehiculo);
//ingreso un nuevo Auto y consulto si está registrado
let auto5:Auto = new Auto("Citroen","C4","AAHBBNN");
console.log("El nuevo auto que ingresó es un:",auto5);
let consultarRegistroVehiculo5:boolean = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto5);
console.log("El Citroen C4,¿Está registrado?",consultarRegistroVehiculo5);
//Registro un auto y vuelvo a consultar si lo encuentra en el registro
registroRioGrandeTDF.registrarVehiculo(auto5);
let consultarNuevamenteRegistroVehiculo5:boolean = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto5);
console.log("Por favor chequee el registro nuevamente, el Citroen C4,¿Está registrado?",consultarNuevamenteRegistroVehiculo5);
// Edito un vehículo
console.log("El vehículo de marca Toyota va a ser modificado");
registroRioGrandeTDF.editarVehiculo(3,"AATHGD");
console.log(auto4);
// Elimino un Vehiculo
console.log("El vehiculo 2 será eliminado");
registroRioGrandeTDF.borrarVehiculo(auto3);
//Consulto si está registrado
let consultarRegistroVehiculo2: boolean = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto3);
console.log("El vehiculo 2 ,¿Está registrado?",consultarRegistroVehiculo2);
