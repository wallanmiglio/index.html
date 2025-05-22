//2. Série de Fibonacci
//Peça um número N e mostre os N primeiros termos da série de Fibonacci:
//0, 1, 1, 2, 3, 5, 8, ...

let numeroEMsequencia = parseInt(prompt("Digite o número"));
let soma = 0, soma2 = 1, numero =0;

while(numero < numeroEMsequencia){
    console.log(soma);
    let calculo = soma + soma2;
    soma = soma2;
    soma2 = calculo;
    numero ++;
}

console.log("\nfim da sequência de (FIbonacci..) ");
