function hereda_de(prototipo_hijo, prototipo_padre) {
	var fn = function() {};
	fn.prototype = prototipo_padre.prototype;
	prototipo_hijo.prototype = new fn();
	prototipo_hijo.prototype.constructor = prototipo_hijo;
}

hereda_de(Desarrollador, Persona);

function Persona(nombre, apellido, altura) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.altura = altura;
}

Persona.prototype.saludar = function() {
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soy_alto = function() {
	// toma el objeto Persona
	return this.altura >= 1.8;
};

function Desarrollador(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
}

Desarrollador.prototype.saludar = function() {
	console.log(
		`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
	);
};

//Persona.prototype.soy_alto = () => {
//	// toma el objeto Window
//	return this.altura >= 1.8;
//};

//var andres = new Persona("Andres", "Campero", 1.8);
// var aric = new Persona("Aric", "Hauck", 1.5);
// var kayden = new Persona("Kayden", "Smith", 1.9);



//andres.saludar();
