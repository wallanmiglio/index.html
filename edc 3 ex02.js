//2-	Fazer um programa que calcule a tabuada de qualquer número,
 //e o limite de cálculo deve ser definido pelo usuário:

 // Função para calcular e imprimir a tabuada
function calcularTabuada(numero, limite) {
    
    if (isNaN(numero) && isNaN(limite) && numero <= 0 && limite <= 0) {
        alert("Por favor, digite números válidos maiores que 0.");
        return;
    }

    
    for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


let numero = parseInt(prompt("Digite o número para calcular a tabuada:"));


let limite = parseInt(prompt("Digite o limite para o cálculo da tabuada:"));


calcularTabuada(numero, limite);
