class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.altura = altura;
	}

	saludar() {
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
	}

	soy_alto() {
		return this.altura >= 1.8;
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre, apellido, altura);
	}

	saludar() {
		console.log(
			`Hola, me llamo ${this.nombre} ${
				this.apellido
			} y soy desarrollador/a`
		);
	}
}

//Persona.prototype.soy_alto = () => {
//	// toma el objeto Window
//	return this.altura >= 1.8;
//};

//var andres = new Persona("Andres", "Campero", 1.8);
// var aric = new Persona("Aric", "Hauck", 1.5);
// var kayden = new Persona("Kayden", "Smith", 1.9);

//andres.saludar();
