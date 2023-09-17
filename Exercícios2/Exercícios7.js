function estaEntre(numero, minimo, maximo, inclusivo) {
    if (numero > minimo && numero < maximo) {
        return true
    }else if (inclusivo === true) {
        if(numero === minimo || numero === maximo) {
            return true
        }
    }else {
        return false
    }
}

console.log(estaEntre(50, 20, 100))
console.log(estaEntre(10, 20, 100))
console.log(estaEntre(20, 20, 100, true))
console.log(estaEntre(20, 20, 100, false))
console.log(estaEntre(50, 20, 100, true))