function mediaSimples(array) {
    const soma = (total, valor) => total + valor
    const media = array.reduce(soma) / array.length
    return media.toFixed(2)
}

let nums = [2, 5, 68, 8, 94, 33, 48, 2, 34, 35, 5, 10]
console.log(mediaSimples(nums))