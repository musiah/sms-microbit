radio.onReceivedStringDeprecated(function (modtagetBesked) {
    basic.showString("" + (modtagetBesked))
    modtagetbesked = 1
})
input.onButtonPressed(Button.A, function () {
    modtagetbesked = 0
    tal += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (liste[tal]))
})
input.onButtonPressed(Button.B, function () {
    modtagetbesked = 0
    tal += -1
})
let tal = 0
let modtagetbesked = 0
let liste = ""
liste = "abcdefghijklmnopqrstuvwxyz"
radio.setGroup(1)
modtagetbesked = 0
basic.forever(function () {
    while (modtagetbesked == 0) {
        if (tal > liste.length - 1) {
            tal = 0
        } else if (tal < 0) {
            tal = liste.length - 1
        }
        basic.showString("" + (liste[tal]))
    }
})
