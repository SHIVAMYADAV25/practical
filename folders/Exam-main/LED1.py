# Practical 1: Displaying LED Pattern using Raspberry Pi
#
# Connection:
# LED long leg (+)  -> Physical Pin 11
# LED short leg (-) -> Physical Pin 6 (GND)
#
# Use a 220Ω or 330Ω resistor in series with the LED.
#
# Required package:
# sudo apt install python3-rpi.gpio
#
# Run:
# python3 practical_1_led_patterns.py


# Import RPi.GPIO library to control Raspberry Pi GPIO pins
import RPi.GPIO as GPIO

# Import time library for creating delays
import time


# Ask the user how many times the LED should blink
# int() converts the input into an integer
numTimes = int(input("Enter total number of times to blink: "))


# Ask the user how long each ON/OFF period should last
# float() allows values such as 0.5, 1.5, etc.
speed = float(input("Enter length of each blink (seconds): "))


# Disable GPIO warning messages
GPIO.setwarnings(False)


# Use BOARD numbering
# This means we use the physical pin numbers of the Raspberry Pi
GPIO.setmode(GPIO.BOARD)


# Configure physical Pin 11 as an OUTPUT
# The Raspberry Pi will use this pin to control the LED
GPIO.setup(11, GPIO.OUT)


# Function to blink the LED
#
# numTimes -> number of times the LED should blink
# speed    -> delay between ON and OFF
def Blink(numTimes, speed):

    # Repeat the blinking operation numTimes times
    for i in range(numTimes):

        # Display the current iteration number
        print("Iteration", i + 1)


        # Set Pin 11 HIGH
        # This turns the LED ON
        GPIO.output(11, True)

        # Keep the LED ON for the specified time
        time.sleep(speed)


        # Set Pin 11 LOW
        # This turns the LED OFF
        GPIO.output(11, False)

        # Keep the LED OFF for the specified time
        time.sleep(speed)


# Call the Blink function
# using the values entered by the user
Blink(numTimes, speed)


# Reset the GPIO pins after the program finishes
# This is good practice when using RPi.GPIO
GPIO.cleanup()


# Display completion message
print("Done")





import RPi.GPIO as GPIO
import time

numTimes = int(input("Enter total number of times to blink: "))
speed = float(input("Enter length of each blink (seconds): "))

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)

def Blink(numTimes, speed):
    for i in range(numTimes):
        print("Iteration", i + 1)

        GPIO.output(11, True)
        time.sleep(speed)

        GPIO.output(11, False)
        time.sleep(speed)

Blink(numTimes, speed)

GPIO.cleanup()

print("Done")