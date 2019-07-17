var persona = {
    nombre: 'Andres',
    apellido: 'Campero',
    edad: 8,
    ingeniero: true,
    cocinero: false,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimir_profesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.dj) {
        console.log('dj')
    } else {
        console.log('No es dj')
    }

    if (persona.guitarrista) {
        console.log('Ingeniero')
    } else {
        console.log('No es guitarrista')
    }

    if (persona.drone) {
        console.log('Ingeniero')
    }
}

function imprimir_es_mayor_edad(persona) {

    var { edad } = persona

    if (edad > 18) {
        console.log('Es mayor de edad')
    } else {
        console.log('No es mayor de edad')
    }
}