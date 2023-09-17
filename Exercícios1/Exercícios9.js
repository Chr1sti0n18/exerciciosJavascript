function avaliadorNotas(nota) {
    let notaFinal = arredondar(nota)
    if (notaFinal < 40) {
        return "Reprovado"
    } if(nota > 100){
        return "Essa nota está acima do máximo permitido"
    }
    if (notaFinal >= 40) {
        return `aprovado com a nota = ${notaFinal}`
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(avaliadorNotas(49))