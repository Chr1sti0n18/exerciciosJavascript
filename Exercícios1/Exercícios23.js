function mediaPonderada(cod, nota1, nota2, nota3) {
    const codigo = cod
    const notas = [nota1, nota2, nota3]
    if (nota1 > nota2 && nota1 > nota3) {
        prova1 = nota1 * 4
        prova2 = nota2 * 3
        prova3 = nota3 * 3
    }else if (nota2 > nota1 && nota2 > nota3) {
        prova2 = nota2 * 4
        prova1 = nota1 * 3
        prova3 = nota3 * 3
    }else if (nota1 == nota2 || nota1 == nota3){
        prova3 = nota3 * 3
        prova1 = nota1 * 4
        prova2 = nota2 * 3
    }else if (nota2 == nota3) {
        prova2 = nota2 * 4
        prova1 = nota1 * 3
        prova3 = nota3 * 3
    }else {
        prova3 = nota3 * 4
        prova1 = nota1 * 3
        prova2 = nota2 * 3
    }
    
    mediaP = (prova1 + prova2 + prova3) / 10
    
    if (mediaP >= 5) {
        return `aluno ${codigo}, notas: ${notas}, media = ${mediaP}, Situação : Aprovado.`
    } else {
        return `aluno ${codigo}, notas: ${notas}, media = ${mediaP}, Situação : Reprovado.`
    }
}

console.log(mediaPonderada(1, 7, 4, 10))
console.log(mediaPonderada(2, 5, 5, 4))
