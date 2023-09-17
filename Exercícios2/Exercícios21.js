function menorElemento(array) {
    let menor = array[0]

    for (i = 0; i < array.length; i++) {
        if(array[i] < menor) {
            menor = array[i]
        }
    }
    return menor
}

console.log(menorElemento([ 5, 10, 48, 8, 9, 7]))