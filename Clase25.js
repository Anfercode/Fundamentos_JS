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
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}


obtener_personaje(1000)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(on_error)