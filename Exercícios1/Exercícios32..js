function mediaArit() {
    vetor = [25, 15, 23, 5, 8, 9, 4, 24, 56, 83]
    media = 0
    for (i in vetor) {
        media += vetor[i]
    }
    media = media / vetor.length
    return media
}

console.log(mediaArit())