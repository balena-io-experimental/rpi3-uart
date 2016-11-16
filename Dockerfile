FROM resin/raspberrypi3-node:4.0

WORKDIR /usr/src/app

RUN npm install serialport

COPY . .

CMD node main.js

ENV INITSYSTEM=on
