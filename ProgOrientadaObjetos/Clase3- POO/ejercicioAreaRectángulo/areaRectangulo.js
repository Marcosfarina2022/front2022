/*Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).*/
var rectangulo = /** @class */ (function () {
    function rectangulo(b, a) {
        this.base = b;
        this.altura = a;
    }
    rectangulo.prototype.setBase = function (baseRect) {
        this.base = baseRect;
    };
    rectangulo.prototype.getBase = function () {
        return this.base;
    };
    rectangulo.prototype.setAltura = function (altRect) {
        this.altura = altRect;
    };
    rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    rectangulo.prototype.determinarArea = function () {
        var resultado;
        resultado = Number(this.base) * Number(this.altura);
        return resultado;
    };
    rectangulo.prototype.determinarSiEsCuadrado = function () {
        var figura;
        if (this.base == this.altura) {
            figura = "Es un cuadrado";
        }
        else {
            figura = "Es un rectángulo";
        }
        return figura;
    };
    rectangulo.prototype.determinarEstadoRec = function () {
        var estado;
        if (this.altura > this.base) {
            estado = "Parado";
        }
        else {
            estado = "Acostado";
        }
        return estado;
    };
    rectangulo.prototype.compararRectangulos = function () {
        var valor;
        if (area.determinarArea() > area1.determinarArea()) {
            valor = 1;
        }
        else if (area.determinarArea() == area1.determinarArea()) {
            valor = 0;
        }
        else {
            valor = -1;
        }
        return valor;
    };
    return rectangulo;
}());
var area = new rectangulo(70, 60);
var area1 = new rectangulo(80, 60);
console.log("La base del rectangulo es", area.getBase());
console.log("La altura del rectangulo es", area.getAltura());
console.log("El area del rectangulo es de: ", area.determinarArea());
console.log("Segun el área calculada, la figura", area.determinarSiEsCuadrado());
console.log("El rectángulo está", area.determinarEstadoRec());
console.log("El resultado de la compración es", area.compararRectangulos());
