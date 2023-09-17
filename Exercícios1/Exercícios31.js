function negativos() {
    let inteiros = [-1, 5, 6, -3, -6, -9, 20, 10, 39, 0, 48, -49]  
    let contadorNegativos = 0
    for (i in inteiros) {
        if (inteiros[i] < 0) {
            contadorNegativos++
        }
    }
    return contadorNegativos
}

console.log(negativos())