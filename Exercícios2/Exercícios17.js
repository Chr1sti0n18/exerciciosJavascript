function somaArray(array) {
    const soma = (total, valor) => total + valor
    return array.reduce(soma)
}

console.log(somaArray([1,2,3,4,5,6]))