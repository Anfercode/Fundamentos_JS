const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtener_personaje(id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
	$.get(url, opts, function(persona) {
		console.log(`Hola yo soy ${persona.name}`);
		if (callback) {
			callback();
		}
	});
}

obtener_personaje(1, function() {
	obtener_personaje(2, function() {
		obtener_personaje(3, function() {
			obtener_personaje(4, function() {
				obtener_personaje(5, function() {
					obtener_personaje(6);
				});
			});
		});
	});
});
