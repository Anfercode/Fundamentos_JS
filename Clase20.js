class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.altura = altura;
	}

	saludar(fn) {
        var { nombre, apellido } = this;
		console.log(`Hola me llamo ${nombre} ${apellido}`);
		if (fn) {
			fn(nombre, apellido);
		}
	}

	soy_alto() {
		return this.altura >= 1.8;
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre, apellido, altura);
	}

	saludar(fn) {
        var { nombre, apellido } = this;
		console.log(
			`Hola, me llamo ${nombre} ${
				apellido
			} y soy desarrollador/a`
		);
		if (fn) {
			fn(nombre, apellido, true);
		}
	}
}

function responder_saludo(nombre, apellido, es_dev) {
	//var apellido = this.apellido
	//var nombre = this.nombre
	console.log(`Buen dia ${nombre} ${apellido}`);
	if (es_dev) {
		console.log(`ohhhhh ${nombre} eres un desarrollador/a, que genial`);
	}
}

var andres = new Persona("Andres", "Campero", 1.8);
var aric = new Persona("Aric", "Hauck", 1.5);
var kayden = new Desarrollador("Kayden", "Smith", 1.9);

andres.saludar();
aric.saludar(responder_saludo);
kayden.saludar(responder_saludo);
