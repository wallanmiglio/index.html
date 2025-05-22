//3. Números entre dois valores com salto personalizado
//Solicite três valores: início, fim e passo. Mostre todos os números no intervalo informado,
//usando o passo definido.
//Ex: Início: 5, Fim: 20, Passo: 3 → Saída: 5, 8, 11, 14, 17, 20

let inicio = parseInt(prompt("Início:"));
let fim = parseInt(prompt("Fim:"));
let passo = parseInt(prompt("Passo:"));


switch (true) {
  case (passo <= 0):
    console.log("O passo deve ser maior que zero.");
    break;
  
  default:
    
    let num = inicio;
    while (num <=+ fim) {
    
      if (num === inicio) {
        console.log(num);
      } else {
        console.log(", " + num);
      }
      
      num += passo;
    }
    break;
}



