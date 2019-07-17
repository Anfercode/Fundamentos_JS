var signo = prompt('¿Cual es tu signo?');

switch (signo.toUpperCase()) {
	case 'ACUARIO':
		console.log(
			'Te darán una sorpresa única, tus amigos conspirarán para alegrarte en este día, se esforzaràn para garantizar que tu experiencia sea única e inigualable ¡Te lo mereces! Disfruta de este momento y muestrate agradecido.'
		);
		break;
	case 'PISCIS':
		console.log(
			'Si te tienes problemas y necesitas la ayuda de un médico o terapeuta, no dudes en hacerlo. Pero recuerda que a veces los mejores terapeutas son aquellas personas que más nos quieren, los amigos/as.'
		);
		break;
	case 'CANCER':
		console.log(
			'Vas a tener algunas dificultades en estos dias, pero serás afortunado y contarás con la ayuda uno de tus grandes amigas/os. Apoyate en él/ella para lograr salir de este bache, será mucho más fácil que si lo intentas hacer tu solo.'
		);
		break;
	case 'TAURO':
		console.log(
			'Se aproximan buenas noticias, una de tus mejores amigas quedará embarazada y necesitara todo tu apoyo y ayuda. Sin duda llenará de alegría y felicidad a todo tu círculo de amistades. ¡Ve comprando los regalos del baby shower!'
		);
		break;
	case 'ESCORPIO':
		console.log(
			'Conocerás a alguien muy especial en un sitio particular, puede ser en una fila de un banco o al pagar algún recibo, ambos disfrutarán de sus mutuas ocurrencias y acabarás forjando una pequeña amistad que con el tiempo se convertirá en uno/ de tus mejores amigos/as.'
		);
        break;
	case 'GÉMINIS':
	case 'GEMINIS':
		console.log(
			'Hay amigos que llevan a la ruina y hay amigos más fieles que un hermano. Es por ello que debes empezar a filtrar bien tus amistades, porque algunas de ellas te estan perjudicando en tu día a día.'
		);
        break;
	default:
        console.log('Me dio flojera buscar tu horoscopo')
}
