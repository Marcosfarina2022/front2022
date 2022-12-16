class Televisor{

    canalActual:number;
    volumenActual:number;
    estaPrendido:boolean;
    constructor(){
        this.canalActual=0;
        this.volumenActual=0;
        this.estaPrendido=false;
    }

    public ponerCanalActual(paramCanalActual : number) {
        this.canalActual= paramCanalActual;
    }
    
    public obtenerCanalActual() : number{
        return this.canalActual;
    }

    public ponerVolumenActual(paramVolumenActual : number) {
        this.volumenActual= paramVolumenActual;
    }
    
    public obtenerCanalActual() : number{
        return this.canalActual;
    }

}