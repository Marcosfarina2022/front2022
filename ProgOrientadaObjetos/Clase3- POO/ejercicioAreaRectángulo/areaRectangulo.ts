/*Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).*/

class Rectangulo{
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
    resultado= (this.base)*(this.altura);
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
compararRectangulos(rectangulo1:Rectangulo, rectangulo2:Rectangulo):number{
    let valor: number;
    if(rectangulo1.determinarArea() > rectangulo2.determinarArea()){
        valor= 1;
    }else if (rectangulo1.determinarArea()==rectangulo2.determinarArea()){
        valor= 0;
    }else{
        valor= -1;
    }
    return valor;
}
}

let rectangulo1 = new Rectangulo(70,60);
let rectangulo2 = new Rectangulo(80,60);
console.log("El area del primer rectangulo es de: ", rectangulo1.determinarArea());
console.log("Segun el área calculada, la figura",rectangulo1.determinarSiEsCuadrado());
console.log("El rectángulo está", rectangulo1.determinarEstadoRec());
console.log("El area del segundo rectángulo es:",rectangulo2.determinarArea());
console.log("El resultado de la comparación es", rectangulo1.compararRectangulos(rectangulo1, rectangulo2));