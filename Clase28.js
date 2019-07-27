const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtener_personaje(id) {
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
		$.get(url, opts, function(data) {
			resolve(data);
		}).fail(() => reject(id));
	});
}

function on_error(id) {
	console.log(`Sucedio un error al obtener el personaje ${id}`);
}

async function obtener_personajes() {
	var ids = [1, 2, 3, 4, 5, 6, 7];
	var promesas = ids.map(id => obtener_personaje(id));

	try {
		var personajes = await Promise.all(promesas);
		console.log(personajes);
	} catch (id) {
		on_error(id);
	}
}

obtener_personajes();
