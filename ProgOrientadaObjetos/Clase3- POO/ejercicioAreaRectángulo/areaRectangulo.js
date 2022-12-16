/*Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).*/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(b, a) {
        this.base = b;
        this.altura = a;
    }
    Rectangulo.prototype.setBase = function (baseRect) {
        this.base = baseRect;
    };
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.setAltura = function (altRect) {
        this.altura = altRect;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.determinarArea = function () {
        var resultado;
        resultado = (this.base) * (this.altura);
        return resultado;
    };
    Rectangulo.prototype.determinarSiEsCuadrado = function () {
        var figura;
        if (this.base == this.altura) {
            figura = "Es un cuadrado";
        }
        else {
            figura = "Es un rectángulo";
        }
        return figura;
    };
    Rectangulo.prototype.determinarEstadoRec = function () {
        var estado;
        if (this.altura > this.base) {
            estado = "Parado";
        }
        else {
            estado = "Acostado";
        }
        return estado;
    };
    Rectangulo.prototype.compararRectangulos = function (rectangulo1, rectangulo2) {
        var valor;
        if (rectangulo1.determinarArea() > rectangulo2.determinarArea()) {
            valor = 1;
        }
        else if (rectangulo1.determinarArea() == rectangulo2.determinarArea()) {
            valor = 0;
        }
        else {
            valor = -1;
        }
        return valor;
    };
    return Rectangulo;
}());
var rectangulo1 = new Rectangulo(70, 60);
var rectangulo2 = new Rectangulo(80, 60);
console.log("El area del primer rectangulo es de: ", rectangulo1.determinarArea());
console.log("Segun el área calculada, la figura", rectangulo1.determinarSiEsCuadrado());
console.log("El rectángulo está", rectangulo1.determinarEstadoRec());
console.log("El area del segundo rectángulo es:", rectangulo2.determinarArea());
console.log("El resultado de la comparación es", rectangulo1.compararRectangulos(rectangulo1, rectangulo2));
