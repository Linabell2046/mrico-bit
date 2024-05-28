input.onButtonPressed(Button.A, function () {
    Switch = false
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onGesture(Gesture.SixG, function () {
    Switch = true
})
let Switch = false
Switch = false
basic.forever(function () {
    if (Switch == true) {
        music.play(music.stringPlayable("- E B A - C A C5 ", 120), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Square)
        basic.pause(500)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(500)
    }
})
