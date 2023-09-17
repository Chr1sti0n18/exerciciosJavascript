function divisao(dividendo, divisor) {
    resultado = Math.floor(dividendo / divisor);
    sobra = dividendo % divisor
    return `resultado = ${resultado} sobra = ${sobra}`
}

console.log(divisao(5,2))