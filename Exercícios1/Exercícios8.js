let stringPontuacao = "20, 4, 1, 5, 3, 7"


function comparadorDesempenho(stringPontuacao) {
    let pontuacoes = stringPontuacao.split(", ")
    let quebraDeRecordes = 0
    let piorJogo = 1
    let menorPontuacao = pontuacoes[0]
    let maiorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quebraDeRecordes++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [quebraDeRecordes , piorJogo]
}

console.log(comparadorDesempenho(stringPontuacao))