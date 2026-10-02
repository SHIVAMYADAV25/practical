# Practical 5: Raspberry Pi GPS Module Interfacing
#
# GPS Connections:
# GPS VCC -> Raspberry Pi Physical Pin 2 (5V)
# GPS GND -> Raspberry Pi Physical Pin 6 (GND)
# GPS TX  -> Raspberry Pi Physical Pin 10 (GPIO15 / UART RX)
#
# UART Port: /dev/ttyAMA0
# Baud Rate: 9600


# Serial communication library
import serial

# Library used to parse GPS NMEA sentences
import pynmea2


# Serial port used by the GPS module
port = "/dev/ttyAMA0"


# Create serial connection with GPS
ser = serial.Serial(
    port,
    baudrate=9600,     # GPS communication speed
    timeout=0.5        # Wait up to 0.5 seconds for data
)


# Continuously read GPS data
while True:

    # Read one line of data from GPS
    data = ser.readline()

    # Check whether the data is a GPGGA sentence
    if data[0:6] == b'$GPGGA':

        # Convert bytes to text and parse the GPS sentence
        msg = pynmea2.parse(data.decode(errors="ignore"))

        # Display the parsed GPS information
        print(msg)


# 1. Import serial and pynmea2
#         ↓
# 2. Open /dev/ttyAMA0 at 9600 baud
#         ↓
# 3. Read GPS data
#         ↓
# 4. Check for $GPGGA
#         ↓
# 5. Parse NMEA data using pynmea2
#         ↓
# 6. Print GPS information
#         ↓
# 7. Repeat


import serial

import pynmea2


port = "/dev/ttyAMA0"


ser = serial.Serial(
    port,
    baudrate=9600,     
    timeout=0.5        
)


while True:

    data = ser.readline()

    if data[0:6] == b'$GPGGA':

        msg = pynmea2.parse(data.decode(errors="ignore"))

  
        print(msg)
