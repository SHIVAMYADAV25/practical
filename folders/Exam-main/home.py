# Practical 7: IoT Based Web Controlled Home Automation
#
# Relay Connections:
# Relay IN  -> Physical Pin 37 (GPIO 26)
# Relay GND -> Physical Pin 6 (GND)
# Relay VCC -> Physical Pin 2 (5V)
#
# Install:
# sudo apt install python3-rpi.gpio

import RPi.GPIO as GPIO
from time import sleep


# Relay is connected to physical Pin 37
relay_pin = 37


# Use physical pin numbering
GPIO.setmode(GPIO.BOARD)


# Configure Pin 37 as output
GPIO.setup(relay_pin, GPIO.OUT)


# Set initial state
GPIO.output(relay_pin, 1)


try:

    # Continuously control the relay
    while True:

        # LOW → Relay ON for an active-low relay
        GPIO.output(relay_pin, 0)

        # Wait 5 seconds
        sleep(5)

        # HIGH → Relay OFF for an active-low relay
        GPIO.output(relay_pin, 1)

        # Wait 5 seconds
        sleep(5)


# Stop the program using Ctrl+C
except KeyboardInterrupt:
    pass


# Reset GPIO pins
GPIO.cleanup()

    #              START
    #                ↓
    #       Import GPIO library
    #                ↓
    #    Set BOARD numbering mode
    #                ↓
    #    Configure Physical Pin 37
    #           as OUTPUT
    #                ↓
    #       Relay control starts
    #                ↓
    #     GPIO 37 = LOW (0)
    #                ↓
    #          Relay ON
    #                ↓
    #           Wait 5 sec
    #                ↓
    #     GPIO 37 = HIGH (1)
    #                ↓
    #          Relay OFF
    #                ↓
    #           Wait 5 sec
    #                ↓
    #       Go back to LOW
    #                ↓
    #           Repeat
    #                ↓
    #       Ctrl + C pressed
    #                ↓
    #        GPIO.cleanup()
    #                ↓
    #               END



    
import RPi.GPIO as GPIO
from time import sleep

relay_pin = 37

GPIO.setmode(GPIO.BOARD)

GPIO.setup(relay_pin, GPIO.OUT)

GPIO.output(relay_pin, 1)


try:

    while True:

        GPIO.output(relay_pin, 0)

        sleep(5)

        GPIO.output(relay_pin, 1)

        sleep(5)


except KeyboardInterrupt:
    pass

GPIO.cleanup()