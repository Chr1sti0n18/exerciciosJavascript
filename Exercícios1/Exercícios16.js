function operacoes(numeroa, operacao, numerob){
    switch (operacao) {
        case "+":
            return numeroa + numerob
        case "-":
            return numeroa - numerob
        case "*":
            return numeroa * numerob
        case "/":
            return numeroa / numerob
        default:
            return "Operação inválida"
    }
}

console.log(operacoes(4,"+",4))
console.log(operacoes(4,"-",4))
console.log(operacoes(4,"*",4))
console.log(operacoes(4,"/",4))
