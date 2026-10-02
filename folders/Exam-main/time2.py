# Practical 2: Display Time over 4-Digit 7-Segment Display
#
# Connection:
# TM1637 CLK -> Physical Pin 16 (GPIO 23)
# TM1637 DIO -> Physical Pin 18 (GPIO 24)
# TM1637 VCC -> Physical Pin 2 (5V)
# TM1637 GND -> Physical Pin 6 (GND)
#
# Required package:
# pip3 install tm1637

import time
import datetime
import tm1637


# Create connection with TM1637 display
# clk=23 means GPIO 23 -> Physical Pin 16
# dio=24 means GPIO 24 -> Physical Pin 18
Display = tm1637.TM1637(clk=23, dio=24)


# Clear the display initially
# [0, 0, 0, 0] means all four digits are turned OFF
Display.write([0, 0, 0, 0])


# Set display brightness
# Brightness value can be from 0 to 7
Display.brightness(1)


# Continuously display the current time
while True:

    # Get the current date and time from Raspberry Pi
    now = datetime.datetime.now()

    # Extract the current hour
    hour = now.hour

    # Extract the current minute
    minute = now.minute

    # Extract the current second
    second = now.second

    # Make the colon blink every second
    # Even second  -> colon ON
    # Odd second   -> colon OFF
    show_colon = (second % 2 == 0)

    # Display the current hour and minute
    # Example: 13:40
    # colon=True displays the colon between hour and minute
    Display.numbers(hour, minute, colon=show_colon)

    # Wait for 1 second before updating the display again
    time.sleep(1)








import time
import datetime
import tm1637

Display = tm1637.TM1637(clk=23, dio=24)

Display.write([0, 0, 0, 0])

Display.brightness(1)

while True:
    now = datetime.datetime.now()

    hour = now.hour
    minute = now.minute
    second = now.second

    show_colon = (second % 2 == 0)

    Display.numbers(hour, minute, colon=show_colon)

    time.sleep(1)