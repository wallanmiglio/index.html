let aninacimento = parseInt(prompt("Insira sua idade: "))
let anonacimento = 2000
     switch (true) {
      case (idade < 16):
        console.log("Não pode votar");
        break;
      case (idade >= 16 && idade <= 17):
        console.log("Voto opcional");
        break;
      case (idade >= 18 && idade <= 70):
        console.log("Voto obrigatório");
        break;
      case (idade > 70):
        console.log("Voto facultativo");
        break;
      default:
        console.log("Idade inválida");
    }


  
  
  