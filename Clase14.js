var persona = {
    nombre: 'Andres',
    apellido: 'Campero',
    altura: 1.70
}

var persona1 = {
    nombre: 'Jose',
    apellido: 'Arnoldo',
    altura: 1.50
}

var persona2 = {
    nombre: 'Ricardo',
    apellido: 'Ramirez',
    altura: 1.80
}

var persona3 = {
    nombre: 'Mauricio',
    apellido: 'Vela',
    altura: 1.75
}

var personas = [persona,persona1,persona2,persona3]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}