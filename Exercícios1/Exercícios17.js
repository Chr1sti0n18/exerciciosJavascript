function aumentoSalarial(salario, plano) {
    switch (plano) {
        case "A":
            return salario += salario*0.10
        case "B":
            return salario += salario*0.15
        case "C": 
            return salario += salario*0.20
        default:
            return "Plano inválido"
    }
}

console.log(aumentoSalarial(1000,"A"))
console.log(aumentoSalarial(1000,"B"))
console.log(aumentoSalarial(1000,"C"))
console.log(aumentoSalarial(1000,"D"))