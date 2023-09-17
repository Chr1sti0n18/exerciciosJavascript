function triangulo(m1,m2,m3) {
    if (m1 == m2 && m3 == m2) {
        console.log('Este triangulo é equilatero')
    } else {
        if (m1 == m2 || m1 == m3 || m2 == m3) {
            console.log('Este triangulo é isósceles')
        } else {
            if (m1 != m2 && m2 != m3) {
                console.log('Este triangulo é escaleno')
            }
        }   
    }
}

triangulo(1,2,3)
triangulo(1,1,1)
triangulo(1,2,2)