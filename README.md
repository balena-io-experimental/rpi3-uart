## Using UART/Serial on a resin.io Raspberry Pi 3

This is a basic project to demonstrate the use of `UART0` on the Raspberry Pi 3 which is running [resinOS](resinos.io).

### Usage:

* Provision a Raspberry Pi 3 on resin.io following [this guide](https://docs.resin.io/raspberrypi3/nodejs/getting-started/)
* Clone this repo to your laptop or development machine
* Connect a wire jumper between `GPIO14 / UART0 TX` and `GPIO15 / UART0 RX`.
* Add the Configuration Variable using one of the methods listed below

To enable UART on `GPIO14 / UART0 TX` and `GPIO15 / UART0 RX` , you will need to apply the `pi3-miniuart-bt` device tree overlay.
This can be done in two ways:
1. Add the following Device (or Fleet) Configuration variable to your device (or Fleet).
```
RESIN_HOST_CONFIG_dtoverlay = pi3-miniuart-bt
```
If you can't find the where to add this configuration go to this page on your dashboard: dashboard.resinstaging.io/apps/`APP_ID`/config but replace `APP_ID` with the number of your application.

2. The second, more manual way to enable this configuration is to mount the SD card on your development machine. Find the `resin-boot` partition and in there you should see the Raspberry Pi's boot files, one of which is called `config.txt`. Open this file up and add the following line to the end of the file:
```
dtoverlay=pi3-miniuart-bt
```

Now eject the SD card and pop it back into the RPI3, and you can boot the device up again.

* Finally push this repo to the resin.io device you provisioned at the start. Once the code is pushed, you should see logs on the device's dashboard showing the data being pushed to through the serial port.

__Warning!__ It may not be possible to use the BLE interface on the RPI3 while simultaneously running this code.
