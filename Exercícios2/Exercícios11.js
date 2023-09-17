function arrayPrimeiroUltimo(array) {
    let novoArray = []
    const primeiroElemento = array.shift()
    const ultimoElemento = array.pop()
    novoArray.push(primeiroElemento)
    novoArray.push(ultimoElemento)
    return novoArray
}

nums = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrayPrimeiroUltimo(nums))