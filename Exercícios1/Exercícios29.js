let numeros = [1, 4, 5, 8, 10, 29, 15, 16, 20, 34, 18, 28]

function intervalo() {
    let dentroDoIntervalo = 0
    let foraDoIntervalo = 0
    for (i in numeros) {
        if (numeros[i] >=10 && numeros[i] <= 20) {
            dentroDoIntervalo++
        }else {
            foraDoIntervalo++
        }
    }
    return `Tem ${dentroDoIntervalo} dentro do intervalo e ${foraDoIntervalo} numeros fora dele.`
}

console.log(intervalo())