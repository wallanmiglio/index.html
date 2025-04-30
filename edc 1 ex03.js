//3-	João tem 1,50 metro e cresce 2 centímetros por ano,
// enquanto Zé tem 1,10 metro e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Zé seja maior que João
function calcularAnosParaZeUltrapassarJoao() {
    let alturaJoao = 150; // em centímetros
    let alturaZe = 110;   // em centímetros
    let anos = 0;

    while (alturaZe <= alturaJoao) {
        alturaJoao += 2;
        alturaZe += 3;
        anos++;
    }

    console.log("Serão necessários " + anos + " anos para que Zé seja maior que João.");
    alert("Serão necessários " + anos + " anos para que Zé seja maior que João.");
}

// Executa o cálculo
calcularAnosParaZeUltrapassarJoao();
