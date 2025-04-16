let escolherEstacao = parseInt(prompt("escolha seu mê\n1-3\n4-6\n7-9\n10-12 "))

switch(true){
    
case  (escolherEstacao >= 1 && escolherEstacao <= 3):
    console.log("Verão");
    break;
case (escolherEstacao >= 4 && escolherEstacao <= 6):
    console.log("Outono");
    break;
case (escolherEstacao >= 7 && escolherEstacao <=9):
    console.log("Inverno");
    break;
case (escolherEstacao >= 10 && escolherEstacao <= 12):
    console.log("Primavera");
    default:
    console.log(' Mês inválido! Informe um número entre 1 e 12!!');
}
 console.log('Sua estasão do ano é : '. escolherEstacao);
