var persona = {
	nombre: "Felipe",
	apellido: "Smitham",
	altura: 1.7
};

var persona1 = {
	nombre: "Karlee",
	apellido: "Nienow",
	altura: 1.5
};

var persona2 = {
	nombre: "Eudora",
	apellido: "Grant",
	altura: 1.81
};

var persona3 = {
	nombre: "Frances",
	apellido: "Hintz",
	altura: 1.82
};

const es_alta = ({ altura }) => altura > 1.8;
const es_baja = ({ altura }) => altura < 1.8;

var personas = [persona, persona1, persona2, persona3];

var personas_altas = personas.filter(es_alta);
var personas_bajas = personas.filter(es_baja);

console.log(personas_altas);
