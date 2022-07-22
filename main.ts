pins.LED.digitalWrite(false)
forever(function on_forever() {
    pins.LED.digitalWrite(true)
    control.waitMicros(4)
    pins.LED.digitalWrite(false)
    control.waitMicros(4)
})
