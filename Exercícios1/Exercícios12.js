function fatorial(numero) {
let resultado = numero
    for(let i = numero; i--;) {
        if (i > 0) {
        resultado *= i 
        }
    }
    return resultado
}

console.log(fatorial(6))
console.log(fatorial(4))
