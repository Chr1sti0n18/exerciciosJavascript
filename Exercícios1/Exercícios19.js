let Lanchonete = {
    cachorroQuente: 3.00,
    hamburgerSimples: 4.00,
    cheeseBurger: 5.50,
    bauru: 7.50,
    refrigerante: 3.50,
    suco: 2.80
}


const compras = function(codigo, qtd) {
    switch (codigo){
        case 100:
            return Lanchonete.cachorroQuente * qtd
        case 200:
            return Lanchonete.hamburgerSimples * qtd
        case 300:
            return Lanchonete.cheeseBurger * qtd
        case 400:
            return Lanchonete.bauru * qtd
        case 500:
            return Lanchonete.refrigerante * qtd
        case 600:
            return Lanchonete.suco * qtd
        default :
            return "Produto não existente"
    }
}


console.log(compras(100, 2))
console.log(compras(200, 2))
console.log(compras(300, 2))
console.log(compras(400, 2))
console.log(compras(500, 2))
console.log(compras(600, 2))
console.log(compras(700, 2))
console.log(Lanchonete.cachorroQuente)