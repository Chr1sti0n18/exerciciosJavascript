function filtrarPorQuantidadeDigitos(numeros, filtro) {
    let resultado = []
    
    for (numero of numeros) {
        let quantidadeDigitos = String(numero).length
        if (filtro === quantidadeDigitos) {
            resultado.push(numero)
        }
    }
    return resultado
}

console.log(filtrarPorQuantidadeDigitos([23, 1, 54, 23, 2, 8, 9], 2))