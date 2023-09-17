function objetoParaArray(objeto) {
    arrayResultado = []
    
    for (chave in objeto) {
        arrayResultado.push([chave, objeto[chave]])
    }
    return arrayResultado
}

console.log(objetoParaArray({
    nome: "Christian", profissao: "Desenvolvedor Back-end", idade: 18, endereco: ""
}))