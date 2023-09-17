function comprarAutomovel(modelo) {
    switch (modelo) {
        case "hatch":
            console.log("Compra efetuada com sucesso!")
            break
        case "sedan":
            console.log("Tem certeza que não prefere esse modelo?")
            break
        case "motocicleta":
            console.log("Tem certeza que não prefere esse modelo?")
            break
        case "caminhonete":
            console.log("Tem certeza que não prefere esse modelo?")
            break
        default :
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
}

comprarAutomovel("hatch")
comprarAutomovel("sedan")
comprarAutomovel("motocicleta")
comprarAutomovel("caminhonete")
comprarAutomovel("ferrari")