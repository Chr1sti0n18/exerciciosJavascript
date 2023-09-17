function removerParametro(objeto, parametro) {
    let objetoCopia = Object.assign({}, objeto)
    delete objetoCopia[parametro]
    return objetoCopia
}

const obj = {a: 1, b: 2, c: 3}
console.log(removerParametro(obj , "c"))
console.log(Object.is(removerParametro(obj, "c"), obj))

