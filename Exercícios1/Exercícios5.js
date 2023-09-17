function conversaoEmDinheiro(numero) {
    conversao = numero.toFixed(2)
    return `valor = R$${conversao}`
}

console.log(conversaoEmDinheiro(0.300000000004))