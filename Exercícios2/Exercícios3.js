function salario(horas, valorPorHora) {
    let valorSalario = valorPorHora * horas
    return `Salário igual a ${valorSalario}`
}

console.log(salario(100, 40.5))