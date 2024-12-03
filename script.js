let participantes = [];

function registrarParticipante() {
    const numero = document.getElementById('numero').value;
    if (numero && !participantes.includes(numero)) {
        participantes.push(numero);
        alert(`Número ${numero} registrado!`);
    } else {
        alert("Número inválido ou já registrado.");
    }
}

function sortearNumero() {
    if (participantes.length === 0) {
        alert("Não há participantes.");
        return;
    }
    const vencedor = participantes[Math.floor(Math.random() * participantes.length)];
    document.getElementById('resultado').innerText = `O número sorteado é: ${vencedor}`;
}
