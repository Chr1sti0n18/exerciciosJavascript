function receberSomenteOsParesDeIndicesPares(array) {
    resultado = []
    for (let i in array) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([2, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14]))