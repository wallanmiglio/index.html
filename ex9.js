let opcaoPagamento = parseInt(prompt("Escolha a forma de pagamento:\n1: Cartão de Crédito\n2: Boleto\n3: Pix\n 4- Dinheiro"));

switch (opcaoPagamento) {
    case 1:
      console.log("Você escolheu: Cartão de Crédito");
      break;
    case 2:
      console.log("Você escolheu: Boleto");
      break;
    case 3:
      console.log("Você escolheu: Pix");
      break;
    case 4:
      console.log("Você escolheu: Dinheiro");
      break;
    default:
      console.log("Opção inválida");
  }
     
    console.log("Seu pagamento será em: ". opcaoPagamento);