## Using UART/Serial on a balenaCloud Raspberry Pi 3

This is a basic project to demonstrate the use of `UART0` on the Raspberry Pi 3 which is running on [balenaCloud](https://www.balena.io).

### Usage:

* Provision a Raspberry Pi 3 on balena following [this guide](https://docs.balena.io/learn/getting-started/raspberrypi3/nodejs/)
* Clone this repo to your laptop or development machine
* Connect a wire jumper between `GPIO14 / UART0 TX` and `GPIO15 / UART0 RX`.
* Add the Configuration Variable using one of the methods listed below

For the relevant UART pins (`GPIO14/15`) see this schematic:

![Raspberry Pi GPIO pinout](images/gpio-numbers-pi2.png)

or check at the [Raspberry Pi documentation](https://www.raspberrypi.org/documentation/usage/gpio/).

To enable UART on `GPIO14 / UART0 TX` and `GPIO15 / UART0 RX` , you will need to apply the `pi3-miniuart-bt` device tree overlay. It is because by default those UART pins are used by the BlueTooth (see the [Raspberry Pi UART documentation](https://www.raspberrypi.org/documentation/configuration/uart.md))

For exact steps of how to do that you can find in our documentation [Using UART or Serial on Raspberry Pi 3](https://www.balena.io/docs/learn/develop/hardware/i2c-and-spi/#using-uart-or-serial-on-raspberry-pi-3).


* Finally push this repo to the balena device you provisioned at the start. Once the code is pushed, you should see logs on the device's dashboard showing the data being pushed to through the serial port.

__Warning!__ It may not be possible to use the BLE interface on the RPI3 while simultaneously running this code.

* Adjusting the device to write to

By default this project writes to `/dev/ttyAMA0`. If you'd like to write to a different device, for example `/dev/serial0`, set that value as a service variable called
`SERIAL`. Use the full path. The logs will shows which path the code is trying to write to.

* Output

This project tries to send the exclamation mark character (`!`) over the UART loop-back, and read it back. When successful, the log should read something like `Received: !`.
