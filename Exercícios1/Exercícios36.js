function multiplicaElementos(vet, multiplicador) {
    let vetResultado = [] 
    vet.forEach(elemento => {
        vetResultado.push(elemento * multiplicador)
    })
    return vetResultado
}

vetor = [2, 4, 5, 6, 8]
console.log(multiplicaElementos(vetor, 2))

function multiplicaElementos2(vet, multiplicador) {
    let vetResultado = []
    for (i = 0; i < vet.length; i++) {
        if (vet[i] > 5) {
           vet.forEach(elemento => {
                vetResultado.push(elemento * multiplicador)
            })
        } else {
            vetResultado.push(vet[i])
        }
    }
    return vetResultado
}

console.log(multiplicaElementos2(vetor, 2))