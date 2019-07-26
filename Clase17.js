var persona = {
	nombre: "Felipe",
	apellido: "Smitham",
	altura: 1.7,
	cantidad_de_libros: 52154
};

var persona1 = {
	nombre: "Karlee",
	apellido: "Nienow",
	altura: 1.5,
	cantidad_de_libros: 95730
};

var persona2 = {
	nombre: "Eudora",
	apellido: "Grant",
	altura: 1.81,
	cantidad_de_libros: 26108
};

var persona3 = {
	nombre: "Frances",
	apellido: "Hintz",
	altura: 1.82,
	cantidad_de_libros: 96723
};

var personas = [persona, persona1, persona2, persona3];

var acum = 0;

// for (var i = 0; i < personas.length; i++) {
// acum = acum + personas[i].cantidad_de_libros;
// }

const reducer = (acum, { cantidad_de_libros }) => acum + cantidad_de_libros;

var total_de_libros = personas.reduce(reducer, 0);

console.log(`en total todos tienen ${total_de_libros} libros`);
