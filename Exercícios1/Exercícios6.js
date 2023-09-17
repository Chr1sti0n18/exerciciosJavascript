jurosSimples = function (C, taxa, tempo) {
    return C + (C * taxa * tempo)
}

console.log(jurosSimples(5000, 1.2/100, 12))

jurosCompostos = function (C, taxa, tempo) {
    resultado = C * (1 + taxa) ** tempo
    return resultado.toFixed(2)
}

console.log(jurosCompostos(5000, 1.2/100, 12))