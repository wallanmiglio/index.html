let numeroLivro = parseInt(prompt('digite um numero pra escolher um livro \n1 \n2 \n3 \n4 \n5'));
switch(numeroLivro){
    case 1:
 console.log('ficção'); 
    break;
   case 2:
     console.log('misterio');
     break;
 case 3:
     console.log('romance');
      break;
    case 4:
     console.log('ciencia');
      break;
    case 5:
     console.log('historia');
     break;

     default:
     console.log('numero nao existe!');
}
console.log('o seu livro desejado e de: ', numeroLivro);