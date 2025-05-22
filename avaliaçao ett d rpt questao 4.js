//4. Calculadora de produção em série 
//Simule uma linha de produção que monta 100 produtos. A cada 10 produtos, o sistema faz
///uma “pausa” (exiba uma mensagem). Ao fim, informe quantas pausas foram feitas e o total
//montado.


let totalProdutos = 100;
let produtosMontados = 0;
let pausas = 0;

while (produtosMontados < totalProdutos) {
  produtosMontados++;

  if (produtosMontados % 10 === 0) {
    pausas++;
    console.log("Pausa após a montagem de " + produtosMontados + " produtos.");
  } else {

    console.log("Produção continua... " + produtosMontados + " produtos montados.");
  }
}


console.log("Total de produtos montados: " + produtosMontados);
console.log("Total de pausas feitas: " + pausas);
