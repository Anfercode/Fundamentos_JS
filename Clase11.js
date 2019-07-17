var persona = {
	nombre: "Andres",
	apellido: "Campero",
	edad: 21,
	peso: 90
};

//console.log(`Àl inicio del año ${persona.nombre} pesa ${persona.peso}Kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANIO = 365;
const META = persona.peso - 3;

const aumentar_de_peso = persona => (persona.peso += INCREMENTO_PESO);
const disminuir_de_peso = persona => (persona.peso -= INCREMENTO_PESO);
const come_mucho = () => Math.random() < 0.3;
const realiza_deporte = () => Math.random() < 0.4;

var dias = 0;

while (persona.peso > META) {
	if (come_mucho()) {
		aumentar_de_peso(persona);
	}

	if (realiza_deporte()) {
		disminuir_de_peso(persona);
	}

	dias++;
}

console.log(
	`Pasaron ${dias} dias hasta que ${
		persona.nombre
	} adelgazo ${persona.peso.toFixed(1)}Kg`
);
