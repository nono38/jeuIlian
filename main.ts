input.onButtonPressed(Button.A, function () {
    led.unplot(perso, 4)
    perso = perso - 1
    led.plot(perso, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(perso, 4)
    perso = perso + 1
    led.plot(perso, 4)
})
let perso = 0
let mechant = -1
perso = 2
led.plot(perso, 4)
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        basic.pause(1000)
        led.unplot(2, mechant)
        mechant = mechant + 1
        led.plot(2, mechant)
    }
    mechant = -1
    for (let index = 0; index < 6; index++) {
        basic.pause(1000)
        mechant = mechant + 1
        led.plot(4, mechant)
        led.unplot(2, mechant)
    }
    mechant = -1
    for (let index = 0; index < 6; index++) {
        basic.pause(1000)
        mechant = mechant + 1
        led.unplot(4, mechant)
        led.plot(2, mechant)
    }
    mechant = -1
    for (let index = 0; index < 6; index++) {
        basic.pause(1000)
        mechant = mechant + 1
        led.plot(1, mechant)
        led.unplot(1, mechant)
    }
})
basic.forever(function () {
	
})
