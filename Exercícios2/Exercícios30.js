const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
const estudantesComMedias = Object.entries(estudantes).map( estudante => {
const chave = 0,
valor = 1
return { nome: estudante[chave], media: media(estudante[valor]) }
})
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}

alunosEscola = {
    Joao: [8, 7.9, 6.6, 9],
    Mariana: [9, 8.9, 7.9, 7],
    Carla: [6.6, 5.8, 8.6, 9]
}

console.log(recerberMelhorEstudante(alunosEscola))