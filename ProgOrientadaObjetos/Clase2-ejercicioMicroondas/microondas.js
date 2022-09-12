//  Ejercicio de funcionamiento de un Microondas
var microondas = /** @class */ (function () {
    //funcionalidades
    function microondas(m, s, o) {
        this.marca = m;
        this.serie = s;
        this.prendido = false;
        this.opcion = o;
    }
    microondas.prototype.obtenerDatos = function () {
        console.log("La marca del microondas es", this.marca, "y", "su numero de serie es:", this.serie);
    };
    microondas.prototype.prender = function () {
        if (this.prendido == false) {
            console.log("Debes prender el microondas para comenzar a utilizarlo");
            this.prendido = true;
            console.log("El dispositivo está prendido, el microondas está listo para utilizarlo");
        }
    };
    microondas.prototype.programar = function () {
        console.log("marcá la opción para calentar la comida", " ", this.opcion);
    };
    microondas.prototype.calentar = function () {
        console.log("La comida ya empezó a calentarse");
    };
    return microondas;
}());
var micro = new microondas("samsungs", 37890456, 1);
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
