let nivelPrioridade = parseInt(prompt('ensira um numero \n1 \n2 \n3 \n4 \n5'));
switch(nivelPrioridade){
    case 1:
 console.log('muito baixa'); 
    break;
   case 2:
     console.log('baixa');
     break;
 case 3:
     console.log('media');
      break;
    case 4:
     console.log('alta');
      break;
    case 5:
     console.log('muito alta');
     break;

     default:
     console.log('numero nao existe!');
}
console.log('o seu nivel e : ', nivelPrioridade);