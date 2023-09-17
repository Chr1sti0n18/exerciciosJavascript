function buscarPalavrasSemelhantes(busca, arrayPalavras) {
    let resultado = []
    for (let palavras of arrayPalavras) {
        if(palavras.includes(busca)) {
            resultado.push(palavras)
        }
    }
    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))