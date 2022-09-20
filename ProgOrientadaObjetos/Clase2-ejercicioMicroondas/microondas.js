//  Ejercicio de funcionamiento de un Microondas
var Microondas = /** @class */ (function () {
    //funcionalidades
    function Microondas(m, s, o) {
        this.marca = m;
        this.serie = s;
        this.prendido = false;
        this.opcion = o;
    }
    Microondas.prototype.setMarca = function (marcaMicro) {
        this.marca = marcaMicro;
    };
    Microondas.prototype.getMarca = function () {
        return this.marca;
    };
    Microondas.prototype.setSerie = function (serieMicro) {
        this.serie = serieMicro;
    };
    Microondas.prototype.getSerie = function () {
        return this.serie;
    };
    Microondas.prototype.estaPrendido = function () {
        if (this.prendido == false) {
            this.prendido = true;
        }
        else {
            this.prendido = false;
        }
        return this.prendido;
    };
    Microondas.prototype.programar = function () {
        var programa;
        if (this.opcion == 1 && this.prendido == true) {
            programa = "correcta";
        }
        else {
            programa = "invalida o microondas apagado";
        }
        return programa;
    };
    Microondas.prototype.calentar = function (orden) {
        if (this.opcion == 1 && this.prendido == true) {
            orden = "calentar comida";
        }
        else {
            orden = "no se puede calentar la comida";
        }
        return orden;
    };
    return Microondas;
}());
var micro = new Microondas("samsungs", 37890456, 1);
console.log("Marca:", micro.getMarca());
console.log("Serie", micro.getSerie());
console.log("¿El microondas está prendido?", micro.estaPrendido());
console.log("opción elegida:", micro.programar());
console.log(micro.calentar("calentar comida"));
