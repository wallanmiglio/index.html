//1 - O cardápio de uma lanchonete é o seguinte:

//Especificação      Código     Preço
//Cachorro Quente     100      R$ 1,20
//Bauru Simples       101      R$ 1,30
//Bauru com ovo       102      R$ 1,50
//Hambúrguer          103      R$ 1,20
//Cheeseburguer       104      R$ 1,30
//Refrigerante        105      R$ 1,00
//Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço *quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado

 
const cardapio = {
    100: 1.20, // Cachorro Quente
    101: 1.30, // Bauru Simples
    102: 1.50, // Bauru com ovo
    103: 1.20, // Hambúrguer
    104: 1.30, // Cheeseburguer
    105: 1.00  // Refrigerante
  };
  
  function realizarPedido() {
    let total = 0;
    let continuar = true;
    
    while (continuar) {
      alert("Cardápio:\n" +
            "100 - Cachorro Quente - R$1.20\n" +
            "101 - Bauru Simples - R$1.30\n" +
            "102 - Bauru com ovo - R$1.50\n" +
            "103 - Hambúrguer - R$1.20\n" +
            "104 - Cheeseburguer - R$1.30\n" +
            "105 - Refrigerante - R$1.00");
  
      let codigo = prompt("Digite o código do item (ou 0 para encerrar o pedido):");
  
      if (codigo === '0') {
        continuar = false;
        alert("Pedido encerrado! Total a pagar: R$" + total.toFixed(2));
        break;
      }
  
      codigo = parseInt(codigo);
  
      if (cardapio[codigo] === undefined) {
        alert("Código inválido! Tente novamente.");
        continue; 
      }
      let quantidade = prompt("Quantos " + nomeItem(codigo) + " você deseja?");

      quantidade = parseInt(quantidade);
  
    
      if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida! Tente novamente.");
        continue;
      }
      const preco = cardapio[codigo];
      const valorItem = preco * quantidade;
  
      alert("Você pediu " + quantidade + " x " + nomeItem(codigo) + "\n" +
            "Valor do item: R$" + valorItem.toFixed(2));
  
      total += valorItem;
    }
  }
  
  function nomeItem(codigo) {
    switch(codigo) {
      case 100: return "Cachorro Quente";
      case 101: return "Bauru Simples";
      case 102: return "Bauru com ovo";
      case 103: return "Hambúrguer";
      case 104: return "Cheeseburguer";
      case 105: return "Refrigerante";
      default: return "Item desconhecido";
    }
  }

  realizarPedido();
  
