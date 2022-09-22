var Auto = /** @class */ (function () {
    function Auto(marcaAuto, modeloAuto, patenteAuto) {
        this.marca = marcaAuto;
        this.modelo = modeloAuto;
        this.patente = patenteAuto;
    }
    Auto.prototype.setMarca = function (marcaA) {
        this.marca = marcaA;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setModelo = function (modeloA) {
        this.modelo = modeloA;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setPatente = function (patenteA) {
        this.patente = patenteA;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaAutos) {
        this.listadoAutos = listaAutos;
    }
    RegistroAutomotor.prototype.verificarSiExisteElVehiculo = function (parametroAuto) {
        var posicionArreglo = false;
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() === parametroAuto.getPatente()) {
                posicionArreglo = true;
            }
        }
        return posicionArreglo;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (parametroAuto) {
        this.listadoAutos.push(parametroAuto);
    };
    RegistroAutomotor.prototype.borrarVehiculo = function (parametroAuto) {
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() === parametroAuto.getPatente()) {
                this.listadoAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.editarVehiculo = function (pos, patenteA) {
        this.listadoAutos[pos].setPatente(patenteA);
    };
    return RegistroAutomotor;
}());
var auto1 = new Auto("Ford Fiesta", "kinetic", "AAty23");
var auto2 = new Auto("fiat", "Punto", "AAdf22");
var auto3 = new Auto("Chevrolet", "cruce", "AAtg34");
var auto4 = new Auto("Toyota", "Corolla", "AAlf12");
var arregloAutosTDF = [auto1, auto2, auto3, auto4];
var registroRioGrandeTDF = new RegistroAutomotor(arregloAutosTDF);
//Verifico si el vehículo uno está registrado
var consultarRegistroVehiculo = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto1);
console.log("El vehiculo 1", auto1, "¿Está registrado?", consultarRegistroVehiculo);
//ingreso un nuevo Auto y consulto si está registrado
var auto5 = new Auto("Citroen", "C4", "AAHBBNN");
console.log("El nuevo auto que ingresó es un:", auto5);
var consultarRegistroVehiculo5 = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto5);
console.log("El Citroen C4,¿Está registrado?", consultarRegistroVehiculo5);
//Registro un auto y vuelvo a consultar si lo encuentra en el registro
registroRioGrandeTDF.registrarVehiculo(auto5);
var consultarNuevamenteRegistroVehiculo5 = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto5);
console.log("Por favor chequee el registro nuevamente, el Citroen C4,¿Está registrado?", consultarNuevamenteRegistroVehiculo5);
// Edito un vehículo
console.log("El vehículo de marca Toyota va a ser modificado");
registroRioGrandeTDF.editarVehiculo(3, "AATHGD");
console.log(auto4);
// Elimino un Vehiculo
console.log("El vehiculo 2 será eliminado");
registroRioGrandeTDF.borrarVehiculo(auto3);
//Consulto si está registrado
var consultarRegistroVehiculo2 = registroRioGrandeTDF.verificarSiExisteElVehiculo(auto3);
console.log("El vehiculo 2 ,¿Está registrado?", consultarRegistroVehiculo2);
