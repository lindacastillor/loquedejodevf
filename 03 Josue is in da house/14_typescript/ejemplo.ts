class Bebidas {
	sabor: string;
	marca: string;
	temperatura: number;
	mililitros: number;
	ingredientes: any;

	constructor (misabor: string, lamarca: string){
		this.sabor = misabor;
		this.marca = lamarca;
	}

	change (otratemp: number, mililitros: number){
		this.temperatura = otratemp;
		this.mililitros = mililitros;
	}

	print(){
		console.log(
			"Mi bebida es de:",
			this.marca,
			"y el sabor es",
			this.sabor
		);
	}
}
