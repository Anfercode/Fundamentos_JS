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


obtener_personaje(1)
    .then(personaje => {console.log(`El personaje 1 es ${personaje.name}`)
    return obtener_personaje(2)
    })
    .then(personaje => {console.log(`El personaje 2 es ${personaje.name}`)
    return obtener_personaje(3)
    })
    .then(personaje => {console.log(`El personaje 3 es ${personaje.name}`)
    return obtener_personaje(4)
    })
    .then(personaje => {console.log(`El personaje 4 es ${personaje.name}`)
    return obtener_personaje(5)
    })
    .then(personaje => {console.log(`El personaje 5 es ${personaje.name}`)
    return obtener_personaje(6)
    })
    .then(personaje => {console.log(`El personaje 6 es ${personaje.name}`)
    })
    .catch(on_error)