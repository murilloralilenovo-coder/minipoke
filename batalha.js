let vidaini = 100;
let vidamy = 100;
let rodada = 0;
let vitorias = 0;
let derrotas = 0;

let my = {
    nome: "charmander",
    vida: 167,
    ataque: 30,
    critico: 0.2
};

let ini = {
    nome: "bulbassauro",
    vida: 120,
    ataque: 67,
    critico: 0.2
};

function atualizarTela() {
    document.getElementById("vida-jogador").textContent = vidamy;
    document.getElementById("vida-inimigo").textContent = vidaini;
    document.getElementById("rodada").textContent = rodada;
    document.getElementById("vitorias").textContent = vitorias;
    document.getElementById("derrotas").textContent = derrotas;

    document.getElementById("botao-atacar").disabled =
        vidaini === 0 || vidamy === 0;
}

function atacar() {
    if (vidaini === 0 || vidamy === 0) {
        return;
    }

    rodada++;

    let dano = Math.floor(Math.random() * 21) + my.ataque;
    let mensagem = "";

    if (Math.random() < my.critico) {
        dano = dano * 2;
        mensagem = "Critical hit! ";
    }

    vidaini = vidaini - dano;

    if (vidaini < 0) {
        vidaini = 0;
    }

    mensagem += `You dealt ${dano} damage! `;

    if (vidaini === 0) {
        vitorias++;
        mensagem += "You win!";
    } else {
        let danoini = Math.floor(Math.random() * 21) + ini.ataque;

        if (Math.random() < ini.critico) {
            danoini = danoini * 2;
            mensagem += "Enemy critical hit! ";
        }

        vidamy = vidamy - danoini;

        if (vidamy < 0) {
            vidamy = 0;
        }

        mensagem += `The enemy dealt ${danoini} damage! `;

        if (vidamy === 0) {
            derrotas++;
            mensagem += "You lost!";
        }
    }


    document.getElementById("mensagem").textContent = mensagem;
    atualizarTela();
}

function reiniciar() {
    vidaini = ini.vida;
    vidamy = my.vida;
    rodada = 0;

    document.getElementById("mensagem").textContent =
        "Ready to fight!";

    atualizarTela();
}
    function zerarplacar() {
        vitorias = 0
        derrotas = 0
        atualizarTela();
    }
reiniciar();