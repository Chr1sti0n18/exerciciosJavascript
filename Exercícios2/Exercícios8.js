function multiplica(num1, num2) {
    let resultado = num1
    for (i = 1; i < num2; i++) {
        resultado += num1
    }
    return resultado
}

console.log(multiplica(5, 5))
console.log(multiplica(0, 7))