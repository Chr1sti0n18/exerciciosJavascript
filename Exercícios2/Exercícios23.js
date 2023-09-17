function qtdPalavras(string) {
    let qtd = 1
    if (string[0] === " ") {
        qtd -= 1
    }
    for (i in string) {
        if (string[i] === " ") {
            qtd += 1
        }
    }
    return qtd
}

console.log(qtdPalavras(" Eu sou um programador!"))
console.log(qtdPalavras("Cachorro é um ser esperto e muito carinhoso"))