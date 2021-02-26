input.onButtonPressed(Button.A, function () {
    rope += -2
})
input.onButtonPressed(Button.B, function () {
    rope += 2
})
let rope = 0.5
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("A Wins!")
        music.playMelody("E D F E D C F D ", 74)
    } else if (rope > 4) {
        basic.showString("B Wins!")
        music.playMelody("G B A G C5 B A B ", 120)
    } else {
    	
    }
})
