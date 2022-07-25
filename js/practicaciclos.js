let continuar = true
while (continuar) {
    let stringCal = prompt("Ingresa tu calificación")
    if (stringCal != null) {
        let cal = parseInt(stringCal)
        switch (cal) {
            case 0:
            case 1:
            case 2:
                alert("Necesitas estudiar mas...")
                break
            case 3:
            case 4:
                alert("¡Un repaso mas y ya lo tienes!")
                break
            case 5:
                alert("Aprobado por los pelos")
                break
            case 6:
            case 7:
            case 8:
                alert("¡Muy bien! Veo que lo comprendes")
                break
            case 9:
                alert("¡Estas a punto de ser un master!")
            case 10:
                alert("¡WOW, la proxima clase la das tú!")
                break
            default:
                alert("Indique una valoración entre 0 y 10")
        }
    } else {
        alert("Indique una valoración entre 0 y 10")
    }

    continuar = confirm("¿Introducir otra nota?")
}


