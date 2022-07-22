pins.LED.digital_write(False)

def on_forever():
    pins.LED.digital_write(True)
    control.wait_micros(4)
    pins.LED.digital_write(False)
    control.wait_micros(4)
forever(on_forever)
