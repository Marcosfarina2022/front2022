var electrodoméstico = /** @class */ (function () {
    function electrodoméstico(n, pre, c, p, consumoE) {
        this.nombre = n;
        this.precio = pre;
        this.color = c;
        this.peso = p;
        this.consumoEner = consumoE;
    }
    electrodoméstico.prototype.setNombre = function (nombreElectro) {
        this.nombre = nombreElectro;
    };
    electrodoméstico.prototype.getNombre = function () {
        return this.nombre;
    };
    electrodoméstico.prototype.setPrecio = function (precioElectro) {
        this.precio = precioElectro;
    };
    electrodoméstico.prototype.getPrecio = function () {
        return this.precio;
    };
    electrodoméstico.prototype.setColor = function (colorElectro) {
        this.color = colorElectro;
    };
    electrodoméstico.prototype.getColor = function () {
        return this.color;
    };
    electrodoméstico.prototype.setPeso = function (pesoElectro) {
        this.peso = pesoElectro;
    };
    electrodoméstico.prototype.getPeso = function () {
        return this.peso;
    };
    electrodoméstico.prototype.setConsumoEner = function (consEn) {
        this.consumoEner = consEn;
    };
    electrodoméstico.prototype.getConsumoEner = function () {
        return this.consumoEner;
    };
    electrodoméstico.prototype.comprobarConsumo = function () {
        if (this.consumoEner <= 1000) {
            return true;
        }
        else {
            return false;
        }
    };
    electrodoméstico.prototype.comprobarBalance = function () {
        var resultado = Number(this.precio) / Number(this.peso);
        return resultado;
    };
    electrodoméstico.prototype.indicarGama = function () {
        var gama;
        if (this.comprobarBalance() > 3) {
            gama = "Alta";
        }
        else {
            gama = "Baja";
        }
        return gama;
    };
    return electrodoméstico;
}());
var electro = new electrodoméstico("cafetera Phillips", 20000, "negra", 20000, 2000);
console.log("Electrodoméstico", electro.getNombre());
console.log(electro.getColor());
console.log(electro.comprobarConsumo());
console.log(electro.comprobarBalance());
console.log("El electrodoméstico es de gama", electro.indicarGama());
