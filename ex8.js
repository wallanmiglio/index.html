let numeromes= parseInt(prompt("insira o número do mês (1 a 12)"));

if (numeromes < 1 && numeromes > 12) {
    console.log("Número inválido! Por favor, insira um número entre 1 e 12.");
}
switch (numeromes) {
    case 1:
      console.log("Janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Maio");
      break;
    case 6:
      console.log("Junho");
      break;
    case 7:
      console.log("Julho");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Setembro");
      break;
    case 10:
      console.log("Outubro");
      break;
    case 11:
      console.log("Novembro");
      break;
    case 12:
      console.log("Dezembro");
      break;
    default:
      console.log("Número inválido!");
  }
     console.log("O seu  mês correspondido é: ". numeromes);