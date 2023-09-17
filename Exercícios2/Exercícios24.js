function quantosCaracteresNaFrase(caractere, frase) {
    let qtdCaractere = 0
    for (i in frase) {
        if (frase[i] === caractere) {
            qtdCaractere++
        }
    }
    return qtdCaractere
}

console.log(quantosCaracteresNaFrase("C", "Eu, Christian aceito me casar com fulana de tal!"))
console.log(quantosCaracteresNaFrase("c", "Eu, Christian aceito me casar com fulana de tal!"))