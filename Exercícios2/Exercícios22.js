function sorteioNumero(numero) {
    const sorteio = Math.floor((Math.random() * 10).toFixed(0))
    if (numero === sorteio) {
        return `Parabéns! o número sorteado foi ${sorteio}`
    }else {
        return `Que pena! o número sorteado foi ${sorteio}`
    }
}

console.log(sorteioNumero(10))
console.log(sorteioNumero(5))