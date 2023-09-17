function conceitosNotas(vetNotas) {
    conceitoA = []
    conceitoB = []
    conceitoC = []
    conceitoD = []
    for (i in vetNotas) {
        if (vetNotas[i] <= 4.9) {
            conceitoD.push(vetNotas[i])
        }else if (vetNotas[i] >= 5 && vetNotas[i] <= 6.9) {
            conceitoC.push(vetNotas[i])
        }else if (vetNotas[i] >= 7 && vetNotas[i] <= 8.9) {
            conceitoB.push(vetNotas[i])
        }else if (vetNotas[i] >= 9 && vetNotas[i] <= 10) {
            conceitoA.push(vetNotas[i])
        }else {
            console.log("Essa nota não é válida")
        }
    }
    return `conceito A = ${conceitoA} conceito B = ${conceitoB} conceito C = ${conceitoC} conceito D = ${conceitoD}`
}

let notas = [3.5, 5.1, 7.1, 9.1, 5.5]
console.log(conceitosNotas(notas))
