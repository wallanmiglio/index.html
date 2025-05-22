//1. Senha com tentativa limitada
//Peça uma senha ao usuário e permita até 3 tentativas para acertar. Após 3 erros, exiba
//“Acesso bloqueado.”


let tentativa = 0;
let senhaLoguin;
let senha = prompt(`Crie sua senha`);

while (tentativa < 3) {
    
    let senhaLoguin = prompt("Insira sua senha");
    if (senhaLoguin == senha) {
        console.log("Senha correta.");
    } else {
        console.log("Senha incorreta, tente de novo!");
        tentativa += 1;
    }
}

if (tentativa == 3) {
    console.log("Acesso bloqueado ou negado!");
}