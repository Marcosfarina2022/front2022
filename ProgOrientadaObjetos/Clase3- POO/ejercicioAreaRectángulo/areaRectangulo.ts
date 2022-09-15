/*Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).*/

class rectangulo{
private base:number;
private altura:number;
    constructor(b:number,a:number){
        this.base=b;
        this.altura=a;
    }

public setBase(baseRect :number): void {
    this.base = baseRect;
}

public getBase() : number {
    return this.base;
}

public setAltura(altRect: number) {
    this.altura = altRect;
}

public getAltura() : number {
    return this.altura;
}
determinarArea():number{
    let resultado: number;
    resultado= Number(this.base)* Number(this.altura);
    return resultado;
    }

determinarSiEsCuadrado():string{
    let figura:string;
    if (this.base == this.altura) {
       figura="Es un cuadrado";
    } else {
       figura="Es un rectángulo";
    }
    return figura;
}
determinarEstadoRec():string{
    let estado:string;
    if (this.altura > this.base) {
        estado="Parado";
    } else {
        estado="Acostado";
    }
    return estado;

}
compararRectangulos():number{
    let valor: number;
    if(area.determinarArea() > area1.determinarArea()){
        valor= 1;
    }else if (area.determinarArea()==area1.determinarArea()){
        valor= 0;
    }else{
        valor= -1;
    }
    return valor;
}
}

let area = new rectangulo(70,60);
let area1 = new rectangulo(80,60);
console.log("La base del rectangulo es",area.getBase());
console.log("La altura del rectangulo es",area.getAltura());
console.log("El area del rectangulo es de: ", area.determinarArea());
console.log("Segun el área calculada, la figura",area.determinarSiEsCuadrado());
console.log("El rectángulo está", area.determinarEstadoRec());
console.log("El resultado de la compración es", area.compararRectangulos());