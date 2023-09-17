let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function parImpar() {
    let contadorPar = 0
    let contadorImpar = 0
    for (i in inteiros) {
        if (inteiros[i] % 2 == 0) {
            contadorPar++
        }else {
            contadorImpar++
        }
    }
    return `Tem ${contadorPar} par(es) e ${contadorImpar} impar(es)`
}

console.log(parImpar())
