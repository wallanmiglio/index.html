let faxaEtaria= parseInt(prompt("Insira sua idade: "));

switch(true){
    case (faxaEtaria < 12):
        console.log('O preço do inglresso: R$ 10');
        break;
    case (faxaEtaria >=12 && faxaEtaria <= 60):
        console.log('Preço do ingresso: R$ 20');
        break;
    case (faxaEtaria > 60):
        console.log('Preço do ingresso: R$ 15')
        default:
        console.log('Idade inválida');

}
       console.log(faxaEtaria(8))