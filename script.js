// 3 opciones numéricas
let piedra = 1;
let tijera = 2;
let papel = 3;

// Guardamos las rondas, victorias y derrotas
// let rondasJugadas= 0;
// let victoriasMaquina = 0;
// let victoriasJugador = 0;


// Para obtener un número random de la máquina 
function Maquina() {
    return Math.floor(Math.random() * 3) + 1; // Genera un número entre 1 y 3
}

// Para obtener al ganador del juego
function obtenerganador(jugador, maquina) {
    // Comparación de opciones del jugador y máquina
    if (jugador === maquina) {
        return "Empate";
    }
    else if (
        (jugador === piedra && maquina === tijera) ||
        (jugador === papel && maquina === piedra) ||
        (jugador === tijera && maquina === papel)
    ) {
        return "Ganaste!";
    }
    else {
        return "Perdiste!";
    }
}

let rondas = parseInt(prompt("¿Cuántas rondas quieres jugar?"));

function jugarrondas() {
    // Contador jugador y máquina
    let victoriasJugador = 0; 
    let victoriasMaquina = 0;

    // Ciclo para las rondas 
    for (let i = 0; i < rondas; i++) {

        let jugador = prompt('¿Qué opción prefieres: piedra, papel o tijera?').toLowerCase();

        // Definimos la variable que guardará la elección del jugador 
        let eleccionJugador;

        // Empieza el ciclo para la elección del jugador 
        if (jugador === "piedra") {
            eleccionJugador = piedra;
        }
        else if (jugador === "papel") {
            eleccionJugador = papel;
        }
        else if (jugador === "tijera") {
            eleccionJugador = tijera;
        }
        else {
            alert("No es una opción válida, pierdes la jugada!");
            victoriasMaquina++;
            return;
        }

        // Aquí llamamos a la función maquina para obtener la elección de la máquina 
        let eleccionMaquina = Maquina();

        // Mostramos el resultado de la ronda jugada 
        let resultado = obtenerganador(eleccionJugador, eleccionMaquina);

        rondasJugadas++;

        alert(`Ronda ${i+1}: Tú elegiste ${jugador}, la máquina eligió ${eleccionMaquina === piedra ? "piedra" : eleccionMaquina === tijera ? "tijera" : "papel"}.`);
        alert(resultado);

        if (resultado === "Ganaste!") {
            victoriasJugador++;
        } else if (resultado === "Perdiste!") {
            victoriasMaquina++;
        }
    }

    console.log(`Resultados finales: Ganaste ${victoriasJugador} rondas, la máquina ganó ${victoriasMaquina} rondas.`);
    if (victoriasJugador > victoriasMaquina) {
        console.log("¡Eres el ganador del juego!");
    } else if (victoriasMaquina > victoriasJugador) {
        console.log("La máquina gana el juego.");
    } else {
        console.log("Es un empate en el juego.");
    }
}

// Llamada a la función para jugar
jugarrondas();

