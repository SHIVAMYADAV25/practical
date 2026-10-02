# Practical 5: Raspberry Pi GPS Module Interfacing
#
# GPS Module Connections:
#
# VCC  -> Raspberry Pi Physical Pin 2 (5V)
# GND  -> Raspberry Pi Physical Pin 6 (GND)
# TX   -> Raspberry Pi Physical Pin 10 (GPIO15 / RXD)
# RX   -> Raspberry Pi Physical Pin 8 (GPIO14 / TXD)
#
# Serial Port: /dev/serial0
# Baud Rate: 9600


# ============================================================
# METHOD 1: USING RASPI-CONFIG
# ============================================================
#
# Step 1: Open Raspberry Pi configuration:
#
# sudo raspi-config
#
# Go to:
#
# Interface Options
#     ->
# Serial Port
#
# Select:
#
# Would you like a login shell to be accessible over serial?
# -> No
#
# Would you like the serial port hardware to be enabled?
# -> Yes
#
# Finish and reboot:
#
# sudo reboot
#
#
# Step 2: Check the serial port:
#
# ls -l /dev/serial*
#
# You should see:
#
# /dev/serial0
#
#
# Step 3: Install required packages:
#
# sudo apt update
#
# sudo apt install python3-serial
#
# pip3 install pynmea2
#
# If pip gives an error, use:
#
# python3 -m pip install --break-system-packages pynmea2
#
#
# Step 4: Optional Minicom installation:
#
# sudo apt install minicom
#
# Test the GPS:
#
# minicom -D /dev/serial0 -b 9600
#
# GPS data should look similar to:
#
# $GPGGA,...
# $GPRMC,...
# $GPGSA,...
#
#
# Step 5: Create the Python file:
#
# nano practical_5_gps.py
#
# Run:
#
# python3 practical_5_gps.py


# ============================================================
# METHOD 2: MANUAL UART CONFIGURATION
# ============================================================
#
# Step 1: Open the configuration file:
#
# sudo nano /boot/config.txt
#
# Add the following line:
#
# enable_uart=1
#
# Save the file:
#
# Ctrl + O
# Enter
# Ctrl + X
#
#
# On Raspberry Pi OS versions where configuration is stored
# under /boot/firmware, use:
#
# sudo nano /boot/firmware/config.txt
#
#
# Step 2: Disable the serial login service if it is enabled:
#
# sudo systemctl stop serial-getty@serial0.service
#
# sudo systemctl disable serial-getty@serial0.service
#
#
# If your Raspberry Pi uses ttyS0, you can also check:
#
# sudo systemctl status serial-getty@ttyS0.service
#
#
# If it is active, disable it:
#
# sudo systemctl stop serial-getty@ttyS0.service
#
# sudo systemctl disable serial-getty@ttyS0.service
#
#
# Step 3: Reboot:
#
# sudo reboot
#
#
# Step 4: Check UART:
#
# ls -l /dev/serial*
#
# Check that:
#
# /dev/serial0
#
# is available.
#
#
# Step 5: Install required packages:
#
# sudo apt update
#
# sudo apt install python3-serial
#
# pip3 install pynmea2
#
#
# Step 6: Optional GPS test:
#
# minicom -D /dev/serial0 -b 9600
#
#
# ============================================================
# SHORT FORM CODE
# ============================================================

import serial
import pynmea2

port = "/dev/serial0"

ser = serial.Serial(
    port,
    baudrate=9600,
    timeout=0.5
)

while True:
    data = ser.readline()

    if data.startswith(b"$GPGGA"):
        msg = pynmea2.parse(data.decode(errors="ignore"))
        print(msg)


# ============================================================
# LONG FORM CODE
# ============================================================

import time
import serial
import string
import pynmea2
import RPi.GPIO as gpio

gpio.setmode(gpio.BCM)

port = "/dev/serial0"

ser = serial.Serial(
    port,
    baudrate=9600,
    timeout=0.5
)

while True:
    try:
        data = ser.readline()
    except:
        print("loading")
        continue

    if data.startswith(b"$GPGGA"):
        msg = pynmea2.parse(data.decode(errors="ignore"))
        print(msg)
        time.sleep(2)