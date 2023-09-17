despesas = [
    {nome: "Ipod", categoria: "tecnologia", preco: 3599},
    {nome: "Computador", categoria: "tecnologia", preco: 4500},
    {nome: "Carro", categoria: "automovel", preco: 50000}
]

const valorTotalDespesas = function(despesas) {
    const soma = (total, valor) => total + valor
    const preco = despesas => despesas.preco
    const valorTotal = despesas.map(preco).reduce(soma)
    return valorTotal
}

console.log(valorTotalDespesas(despesas))