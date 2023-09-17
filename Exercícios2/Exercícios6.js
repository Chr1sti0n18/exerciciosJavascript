function inverso(param) {
    const tipo = typeof param
    if (tipo === "boolean") {
        if(param === true) {
            return !true
        }else if(param === false) {
            return !false
        }
    }else if(tipo === "number") {
        return -param
    }else {
        return `booleano ou números esperados, mas o parâmetro é do tipo ${tipo}.`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(5))
console.log(inverso(-5))
console.log(inverso("cachorro"))