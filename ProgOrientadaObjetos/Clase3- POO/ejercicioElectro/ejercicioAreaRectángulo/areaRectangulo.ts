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

determinarSiEsCuadrado(){
    let figura:String;
    if (this.base == this.altura) {
       figura="Es un cuadrado";
    } else {
       figura="Es un rectángulo";
    }
}
determinarArea():number{
let resultado: number=0;
resultado= Number(this.base)* Number(this.altura);
return resultado;
}


}
let area= new rectangulo(20,60);
console.log(area.getAltura());
console.log(area.determinarSiEsCuadrado());
console.log(area.determinarArea());