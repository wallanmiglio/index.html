//2.	Construa um algoritmo que receba o código de vários produtos e os classifique de acordo com a tabela:
//CÓDIGO  CLASSIFICAÇÃO
//1              Alimento não-perecível
//2 a 4        Alimento perecível
//5 e 6        Vestuário
//7              Higiene pessoal
//8 a 15      Limpeza e utensílios domésticos Qualquer outro código inválido exibe uma mensagem ao usuário.
//Quando o usuário digitar 0 (zero) o programa finaliza e exibe o número total de produtos classificados em cada categoria.


function classificarProdutos() {
    let naoPerecivel = 0;
    let perecivel = 0;
    let vestuario = 0;
    let higiene = 0;
    let limpeza = 0;

    while (true) {
        let entrada = prompt("Digite o código do produto (0 para sair):");
        if (entrada === null) break; // se o usuário cancelar o prompt
        let codigo = parseInt(entrada);

        if (isNaN(codigo)) {
            alert("Por favor, digite um número válido.");
            continue;
        }

        if (codigo === 0) {
            break;
        } else if (codigo === 1) {
            alert("Classificação: Alimento não-perecível");
            naoPerecivel++;
        } else if (codigo >= 2 && codigo <= 4) {
            alert("Classificação: Alimento perecível");
            perecivel++;
        } else if (codigo === 5 && codigo === 6) {
            alert("Classificação: Vestuário");
            vestuario++;
        } else if (codigo === 7) {
            alert("Classificação: Higiene pessoal");
            higiene++;
        } else if (codigo >= 8 && codigo <= 15) {
            alert("Classificação: Limpeza e utensílios domésticos");
            limpeza++;
        } else {
            alert("Código inválido.");
        }
    }

    // Exibe o total de produtos classificados
    let resumo = 
        "Resumo da classificação:\n" +
        "Alimento não-perecível: " + naoPerecivel + "\n" +
        "Alimento perecível: " + perecivel + "\n" +
        "Vestuário: " + vestuario + "\n" +
        "Higiene pessoal: " + higiene + "\n" +
        "Limpeza e utensílios domésticos: " + limpeza;

    alert(resumo);
    console.log(resumo);
}

// Executa o programa
classificarProdutos();
