// This example shows the use of UART0 with a loopback. To run this correctly, you
// need to add a jumper wire between GPIO14 and GPIO15 on the RPI3.

'use strict';

var SerialPort = require('serialport');
var portName = process.env.SERIAL || '/dev/ttyAMA0';
console.log(`Connecting to ${portName}`);
var port = new SerialPort(portName);

port.on('open', function() {
  var largeMessage = Buffer.alloc(1024 * 10).fill('!');
  console.log('Calling write');
  port.write(largeMessage, function() {
    console.log('Write callback returned');
    // At this point, data may still be buffered and not sent out over the port yet
    // write function returns asynchronously even on the system level.
    console.log('Calling drain');
    port.drain(function() {
      console.log('Drain callback returned');
      // Now the data has "left the pipe" (tcdrain[1]/FlushFileBuffers[2] finished blocking).
      // [1] http://linux.die.net/man/3/tcdrain
      // [2] http://msdn.microsoft.com/en-us/library/windows/desktop/aa364439(v=vs.85).aportx
    });
  });
});

port.on('data', function(data) {
  console.log('Received: \t', data.toString());
});
