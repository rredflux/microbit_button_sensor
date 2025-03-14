input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 1; index++) {
        strip.showColor(neopixel.hsl(150, 100, 50))
        basic.pause(500)
        strip.showColor(neopixel.hsl(180, 100, 50))
        basic.pause(500)
        strip.showColor(neopixel.hsl(210, 100, 50))
        basic.pause(500)
        strip.showColor(neopixel.hsl(240, 100, 50))
        basic.pause(500)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 1; index++) {
        strip.showColor(neopixel.hsl(0, 100, 50))
        basic.pause(500)
        strip.showColor(neopixel.hsl(35, 100, 50))
        basic.pause(500)
        strip.showColor(neopixel.hsl(60, 100, 50))
        basic.pause(500)
        strip.showColor(neopixel.hsl(110, 100, 50))
        basic.pause(500)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
basic.forever(function () {
	
})
