class electrodoméstico{

private nombre:string;
private precio:number;
private color:string;
private peso:number;
private consumoEner: number;
    constructor(n:string,pre:number,c:string,p:number,consumoE:number){
        this.nombre=n;
        this.precio=pre;
        this.color=c;
        this.peso=p;
        this.consumoEner= consumoE;
    }
    setNombre(nombreElectro:string):void{
        this.nombre=nombreElectro;
    }

    getNombre():string {
        return this.nombre;
    }
    
    setPrecio(precioElectro:number):void {
        this.precio = precioElectro;
    }
    
    getPrecio():number {
        return this.precio;
    }
    
    setColor(colorElectro: string):void {
        this.color = colorElectro;
    }
    
    getColor():string{
        return this.color;
    }
    setPeso(pesoElectro: number):void {
        this.peso = pesoElectro;
    }
    
    getPeso():number{
        return this.peso;
    }
    setConsumoEner(consEn: number):void {
        this.consumoEner = consEn;
    }
    
    getConsumoEner():number{
        return this.consumoEner;
    }
    public comprobarConsumo():boolean{
        if(this.consumoEner <=1000){
           return true;
        }else{
           return false;
        }   
    }
    public comprobarBalance(): number{
     let resultado= Number(this.precio)/ Number(this.peso);
     return resultado;
    }
    public indicarGama():string{
        let gama:string;
        if (this.comprobarBalance()> 3) {
           gama= "Alta"; 
        } else {
           gama="Baja"; 
        }
        return gama;
    }

}

let electro= new electrodoméstico("cafetera Phillips", 20000, "negra", 300, 2000);
console.log("Electrodoméstico",electro.getNombre());
console.log(electro.getColor());
console.log(electro.comprobarConsumo());
console.log(electro.comprobarBalance());
console.log("El electrodoméstico es de gama", electro.indicarGama());

