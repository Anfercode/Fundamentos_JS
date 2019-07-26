const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const luke_Url = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };
const on_response = luke => console.log(`Hola yo soy ${luke.name}`);

$.get(luke_Url, opts, on_response);
