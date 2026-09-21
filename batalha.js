let vidaini = 100;
let vidamy = 100;
let rodada = 0;
let vitorias = 0;
let derrotas = 0;

let my = {
    nome: "charmander",
    vida: 120,
    ataque: 20,
    critico: 0.2
};

let ini = {
    nome: "bulbassauro",
    vida: 120,
    ataque: 40,
    critico: 0.2
};

function atacar() {
    if (vidaini === 0 || vidamy === 0) {
        console.log("The battle is over!");
        return vidaini;
    }

    let dano = Math.floor(Math.random() * 21) + my.ataque;

    if (Math.random() < my.critico) {
        dano = dano * 2;
        console.log("Critical hit!");
    }

    vidaini = vidaini - dano;

    if (vidaini < 0) {
        vidaini = 0;
    }

    console.log("You dealt", dano, "damage!");

    if (vidaini === 0) {
        vitorias++;
        console.log("You win!");
    }

    if (vidaini > 0) {
        let danoini = Math.floor(Math.random() * 21) + ini.ataque;

        if (Math.random() < ini.critico) {
            danoini = danoini * 2;
            console.log("Enemy critical hit!");
        }

        vidamy = vidamy - danoini;

        if (vidamy < 0) {
            vidamy = 0;
        }

        console.log("The enemy dealt", danoini, "damage!");
        console.log("Your health:", vidamy);

        if (vidamy === 0) {
            derrotas++;
            console.log("You lost!");
        }
    }

    return vidaini;
}

function reiniciar() {
    vidaini = ini.vida;
    vidamy = my.vida;
    rodada = 0;

    console.log("New battle!");
    console.log("Ready to fight!");
    console.log(my.nome, "vs", ini.nome);
}

function batalhar() {
    while (vidaini > 0 && vidamy > 0) {
        rodada++;
        console.log("Round", rodada);
        console.log("Enemy health remaining:", atacar());
    }
}

for (let partida = 1; partida <= 5; partida++) {
    console.log("Battle", partida);
    reiniciar();
    batalhar();
}

console.log("Wins:", vitorias);
console.log("Losses:", derrotas);

if (vitorias < 3) {
    console.log("You lost the championship!");
} else {
    console.log("Champion!");
}

let batalhas = vitorias + derrotas;
let porcento = (vitorias / batalhas) * 100;

console.log("Win rate:", porcento.toFixed(1) + "%");