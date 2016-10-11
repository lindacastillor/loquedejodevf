class Comida{
	tipo: string;
	sabor: string;
	ingredientes: any = [] ;
	temperatura: number;
	pais: string;
	nombre: string;
	constructor(nombre_comida:string, pais:string){
		this.nombre = nombre_comida;
		this.pais = pais;
	}

	datos(t:string, s:string, tt:number){
		this.tipo = t;
		this.sabor = s;
		this.temperatura = tt;
	}

	detalles(){
		console.log(this.nombre,
			"es", this.tipo,
			"de" , this.pais,
			"y sus ingredientes son",
			this.ingredientes.join(",")
		);
	}

	agregaringredientes(...ingredientes){
		var m = this;
		ingredientes.map ( function(elemento){
			console.log(elemento);
			m.ingredientes.push(elemento);
		});
	}
}
