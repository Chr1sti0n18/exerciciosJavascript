function convenio(idade) {
    let valor = 100
    if (idade < 10) {
        return valor += 80
    } else if (idade >= 10 && idade <= 30) {
        return valor += 50
    } else if (idade > 30 && idade <= 60) {
        return valor += 95
    } else {
        return valor += 130
    }
}

console.log(convenio(9))
console.log(convenio(10))
console.log(convenio(31))
console.log(convenio(61))
console.log(convenio(100))