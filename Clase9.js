var persona = {
	nombre: "Andres",
	apellido: "Campero",
	edad: 8,
	ingeniero: true,
	cocinero: false,
	dj: false,
	guitarrista: false,
	drone: false
};

var persona1 = {
	nombre: "Juan",
	apellido: "Gomez",
	edad: 13
};

function imprimir_profesiones(persona) {
	console.log(`${persona.nombre} es:`);

	if (persona.ingeniero) {
		console.log("Ingeniero");
	} else {
		console.log("No es ingeniero");
	}

	if (persona.dj) {
		console.log("dj");
	} else {
		console.log("No es dj");
	}

	if (persona.guitarrista) {
		console.log("Ingeniero");
	} else {
		console.log("No es guitarrista");
	}

	if (persona.drone) {
		console.log("Ingeniero");
	}
}

const MAYORIA_DE_EDAD = 18;

// const es_mayor_de_edad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

//const es_mayor_de_edad = persona => persona.edad >= MAYORIA_DE_EDAD;
//Si se tiene un solo parametro, se obvian los parentesis
const es_mayor_de_edad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimir_es_mayor_edad(persona) {
	//La persona es mayor de edad
	if (es_mayor_de_edad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`);
	} else {
		console.log(`${persona.nombre} es menor de edad`);
	}
}

function permitir_acceso(persona) {
	if (!es_mayor_de_edad(persona)) {
		console.log("Acceso Denegado");
	}
}

//  ARROW FUNCTION
const esMenorDeEdad = persona => !esMayorDeEdad(persona);
//  ARROW FUNCTION + DESTRUCTURING
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad });
