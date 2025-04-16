let grau = parseInt(prompt(`Qual seu nível de escolaridade`))

switch (grau) {
    case 1:
        console.log(`Ensino fundamental`);
        break;
    case 2:
        console.log(`Ensino médio`);
        break;
    case 3:
        console.log(`Ensino superior`);
        break;
    case 4:
        console.log(`Pós-graduação`);
        break;
    default:
        console.log(`Nível inválido`);
        break;
}