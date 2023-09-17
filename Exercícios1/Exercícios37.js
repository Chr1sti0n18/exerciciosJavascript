function Pa(n, a1, r) {
    let termos = [a1]
    let progressao = a1
    let soma = 0
    for (let i = 1; i < n; i++) {
        progressao += r
        termos.push(progressao)
    }
    for (i in termos) {
        soma += termos[i]
    }
    return `Pa = ${termos} e soma dos termos = ${soma}`
}

console.log(Pa(10,0,5))

function Pg(n, a1, r) {
    let termos = [a1]
    let progressao = a1
    let soma = 0
    for (let x = 1; x < n; x ++) {
        progressao = termos[x-1] * r
        termos.push(progressao)
    }
    for (x in termos) {
        soma += termos[x]
    }
    return `Pg = ${termos} e soma dos termos = ${soma}`
}

console.log(Pg(10,5,2))
