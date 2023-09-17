function repeticao(elemento, numRepeticoes) {
    let resultado = []
    for (let i = 0; i < numRepeticoes; i++) {
        resultado.push(elemento)
    }
    return resultado
}

console.log(repeticao("código", 3))
console.log(repeticao(7, 3))