var x = 4,
    y = '4'

var persona = {
    nombre = 'Andres'
}

var persona2 = {
    nombre = 'Andres'
}

var persona3 = persona

var persona4 = {
    ...persona
}

// x == y true = llevar los 2 valores a un mismo tipo de dato
// x === y false = Valida valores y tipos
// persona == persona2 = false 
// persona === persona2 = false
// persona === persona3 = true
// persona === persona4 = false