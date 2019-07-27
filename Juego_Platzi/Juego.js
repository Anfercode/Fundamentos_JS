const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
class Juego {
	constructor() {
		this.inicializar();
		this.generar_secuencia();
		this.siguiente_nivel();
	}
	inicializar() {
		btnEmpezar.classList.add("hide");
		this.nivel = 1;
		this.colores = {
			celeste,
			violeta,
			naranja,
			verde
		};
	}

	generar_secuencia() {
		this.secuencia = new Array(10)
			.fill(0)
			.map(n => Math.floor(Math.random() * 4));
	}

	siguiente_nivel() {
		this.iluminar_secuencia();
	}

	transformar_numero_a_color(numero) {
		switch (numero) {
			case 0:
				return "celeste";
			case 1:
				return "violeta";
			case 2:
				return "naranja";
			case 3:
				return "verde";
		}
	}

	iluminar_secuencia() {
		for (let i = 0; i < this.nivel; i++) {
            let color = this.transformar_numero_a_color(this.secuencia[i]);
			setTimeout(() => this.iluminar_color(color), 1000 * i);
		}
	}

	iluminar_color(color) {
		this.colores[color].classList.add("light");
		setTimeout(() => this.apagar_color(color), 500);
	}

	apagar_color(color) {
		this.colores[color].classList.remove("light");
	}
}

function empezarJuego() {
	var juego = new Juego();
}
