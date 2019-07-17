var persona = {
	nombre: "Andres",
	apellido: "Campero",
	edad: 21,
	peso: 90
};

console.log(`Àl inicio del año ${persona.nombre} pesa ${persona.peso}Kg`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentar_de_peso = persona => persona.peso += INCREMENTO_PESO
const disminuir_de_peso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 0; i < DIAS_DEL_ANIO; i++) {
	var random = Math.random();

	if (random < 0.25) {
        aumentar_de_peso(persona)
    } else if (random < 0.5) {
        disminuir_de_peso(persona)
	}
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)}Kg`);
