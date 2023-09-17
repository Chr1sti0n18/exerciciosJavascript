function diaUtil(dia) {
    switch (dia) {
        case 1: case 7: case 8: case 15: case 16: case 23: case 24:
            console.log("Esse dia é fim de semana!") 
            break
        case 2: case 3: case 4: case 5: case 6: case 9: case 10: case 11: case 12: case 13: case 14: case 17: case 18: case 19: case 20: case 21: case 22: case 25: case 26: case 27: case 28: case 29: case 30:
            console.log("Esse dia é util!") 
            break
        default :
            console.log("Dia inválido") 
    }
}

diaUtil(-1)
diaUtil(1)
diaUtil(2)