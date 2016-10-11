var Bebidas = (function () {
    function Bebidas(misabor, lamarca) {
        this.sabor = misabor;
        this.marca = lamarca;
    }
    Bebidas.prototype.change = function (otratemp, mililitros) {
        this.temperatura = otratemp;
        this.mililitros = mililitros;
    };
    return Bebidas;
}());
