const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtener_personaje(id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
	$.get(url, opts, callback).fail(function() {
		console.log("Ocurrio un error");
	});
}

obtener_personaje(1, function(personaje) {
	console.log(`Hola yo soy ${personaje.name}`);
	obtener_personaje(2, function(personaje) {
		console.log(`Hola yo soy ${personaje.name}`);
		obtener_personaje(3, function(personaje) {
			console.log(`Hola yo soy ${personaje.name}`);
			obtener_personaje(4, function(personaje) {
				console.log(`Hola yo soy ${personaje.name}`);
				obtener_personaje(5, function(personaje) {
					console.log(`Hola yo soy ${personaje.name}`);
					obtener_personaje(6, function(personaje) {
						console.log(`Hola yo soy ${personaje.name}`);
					});
				});
			});
		});
	});
});
