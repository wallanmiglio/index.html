let codigoCidade = 1;
let veiculos, acidentes, totalveiculos = 0, totalveiculosSC = 0, contadorPais = 0, contadorSC = 0, acidenteSC;

while(codigoCidade != 0){
codigoCidade = parseInt(prompt("Digite o codigo da cidade: "));
if (codigoCidade != 0){
veiculos = parseInt(prompt("Digite a quantidade de veiculos: "));
acidentes = parseInt(prompt("Digite a quantidade de vitmias"));
totalveiculos += veiculos;
contadorPais++;
switch(codigoCidade){
case 11:
totalveiculosSC += veiculos;
contadorSC++;
acidenteSC += acidentes;

}
}


}
console.log('media de veiculos SC: ', (totalveiculosSC/contadorSC));
console.log('Média de acidente em SC: ',(acidenteSC/contadorSC));

