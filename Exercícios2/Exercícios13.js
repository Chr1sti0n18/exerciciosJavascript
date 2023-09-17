function filtrarElementos(array) {
    let numero = array => typeof array === "number"
    return array.filter(numero)
}

arrayNums = [1, 2, "cachorro", "5", "0", 10]
console.log(filtrarElementos(arrayNums))