let numeroidade = parseInt(prompt("Insira sua idade: "))

switch(true){
    
 case  ( numeroidade < 18):
    console.log(' Menor que 18');
    break;
 case (numeroidade >= 18 && numeroidade <60):
    console.log(' maior ou igual a 18 anos e menor que 60 anos');
    break;
case (numeroidade >= 60):
    console.log(' 60 anos ou mais');
    default:
    console.log('idade invalida!!');
}
 console.log('Sua classificação é: '. numeroidade);18
