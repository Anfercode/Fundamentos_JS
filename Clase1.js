var nombre = "Candida",
    apellido = "copying";

var nombre_en_mayusculas = nombre.toUpperCase();
var apellido_en_minusculas = apellido.toLocaleLowerCase();

var primera_letra_del_nombre = nombre.charAt(0);
var cantidad_de_letras_del_nombre = nombre.length;

var nombre_completo = `${nombre} ${apellido}`;

var str = nombre.substr(1, 2);

var ultima_letra_del_nombre = nombre.substr(nombre.length - 1, nombre.length)