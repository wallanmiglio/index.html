//3-	Fazer um programa que retorne quantos valores digitados pelo usuário são negativos.
 //Repetir o enquanto até o usuário digitar o valor ZERO:

let contadorNegativos = 0; // Variável para contar os números negativos

while (true) {
    // Solicita ao usuário para digitar um número
    let numero = parseInt(prompt("Digite um número (digite 0 para finalizar):"));

    
    if (numero === 0) {
        break;
    }

    // Verifica se o número é negativo
    if (numero < 0) {
        contadorNegativos++;
    }
}

// Exibe o total de números negativos digitados
alert(`Você digitou ${contadorNegativos} números negativos.`);
console.log(`Você digitou ${contadorNegativos} números negativos.`);
