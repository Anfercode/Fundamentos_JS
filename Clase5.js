var persona1 = {
    nombre: 'Andres',
    apellido: 'Campero',
    edad: 26
}

var persona2 = {
    nombre: 'Jose',
    apellido: 'Arnoldo',
    edad: 24
}

// function imprimir_nombre_en_mayusculas({ nombre }) {
//     console.log(nombre.toUpperCase())
//}


function imprimir_nombre_en_mayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function imprimir_nombre_y_edad(persona) {

    var { nombre } = persona
    var { edad } = persona

    console.log(`${nombre} tiene ${edad} años`)
}

function cumpleaños(persona) {
    //Valor

    return {
        ...persona,
        edad: persona1.edad + 1
    }
    //persona.edad += 1 referencia
}


imprimir_nombre_en_mayusculas(persona1)
imprimir_nombre_en_mayusculas(persona2)
imprimir_nombre_en_mayusculas({ nombre: 'Miguel' })
imprimir_nombre_y_edad(persona1)