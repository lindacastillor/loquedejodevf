var Comida = (function () {
    function Comida(nombre_comida, pais) {
        this.ingredientes = [];
        this.nombre = nombre_comida;
        this.pais = pais;
    }
    Comida.prototype.datos = function (t, s, tt) {
        this.tipo = t;
        this.sabor = s;
        this.temperatura = tt;
    };
    Comida.prototype.detalles = function () {
        console.log(this.nombre, "es", this.tipo, "de", this.pais, "y sus ingredientes son", this.ingredientes.join(","));
    };
    Comida.prototype.agregaringredientes = function () {
        var ingredientes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ingredientes[_i - 0] = arguments[_i];
        }
        var m = this;
        ingredientes.map(function (elemento) {
            console.log(elemento);
            m.ingredientes.push(elemento);
        });
    };
    return Comida;
}());
