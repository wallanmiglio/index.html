//4Faça um algoritmo que leia vários códigos do jogador (1 ou 2) que ganhou o ponto em uma partida de pingue-pongue,
 //e responda quem ganha a partida. A partida chega ao final se um dos jogadores chega a 21 pontos e a diferença
 // de pontos entre os jogadores é maior ou igual a dois. 
function jogarPartida() {
    let pontosJogador1 = 0;
    let pontosJogador2 = 0;

    alert("A partida começa! O primeiro jogador a atingir 21 pontos com uma diferença de pelo menos 2 pontos vence.");

    while (true) {
        // Exibe o placar atual
        console.log(`Pontos - Jogador 1: ${pontosJogador1} | Jogador 2: ${pontosJogador2}`);
        
        // Lê o código do jogador que ganhou o ponto
        let codigo = prompt("Digite 1 se o Jogador 1 ganhar o ponto ou 2 se o Jogador 2 ganhar o ponto:");

        // Validação de entrada
        if (codigo === null) {
            alert("Saindo da partida...");
            break;
        }

        codigo = parseInt(codigo);

        if (codigo === 1) {
            pontosJogador1++;
        } else if (codigo === 2) {
            pontosJogador2++;
        } else {
            alert("Código inválido! Digite 1 para Jogador 1 ou 2 para Jogador 2.");
            continue; // Pede o código novamente se o valor for inválido
        }

        // Verifica se algum jogador ganhou a partida
        if ((pontosJogador1 >= 21 || pontosJogador2 >= 21) && Math.abs(pontosJogador1 - pontosJogador2) >= 2) {
            let vencedor = pontosJogador1 > pontosJogador2 ? "Jogador 1" : "Jogador 2";
            alert(`${vencedor} venceu a partida!`);
            console.log(`${vencedor} venceu a partida!`);
            console.log(`Placar Final - Jogador 1: ${pontosJogador1} | Jogador 2: ${pontosJogador2}`);
            break; // Finaliza a partida
        }
    }
}

// Inicia a partida
jogarPartida();
