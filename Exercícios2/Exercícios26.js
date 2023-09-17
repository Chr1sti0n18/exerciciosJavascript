function semVogais(frase) {
    const vogais = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
    vogais.forEach( vogal => frase = frase.replace(vogal, ""))
    return frase
}

console.log(semVogais("fundamentos"))