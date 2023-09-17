vetorInteiros = [1, 3, 5, 6, 8]
vetorString = ["1", "3", "5", "6", "8"]
vetorDouble = [1.8, 3.4, 5.2, 6.6, 8.9]

vetorResultado = []
vetorResultado = vetorInteiros.concat(",") + vetorDouble.concat(",") + vetorString.concat(",")
console.log(vetorResultado)