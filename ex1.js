let numerodia = parseInt(prompt("1- Domingo\n2 - segunda-feira\n3 - terça-feira\n4 - quarta-feira\n5 quinta-feira\n6 - sexta-feira\n7- sabado"))

switch(numerodia){
   case 1:
console.log('Domingo') 
   break;
  case 2:
    console.log('segunda-feira')
    break;
case 3:
    console.log('terça-feira')
     break;
   case 4:
    console.log('quarta-feira')
     break;
   case 5:
    console.log('quinta-feira')
    break
   case 6:
    console.log('sexta-feira')
    break;
  case 7:
    console.log('sabado') 
    default:
    console.log('Dia não exsitente!')
}
   console.log('O seu dia é; '. numerodia);
