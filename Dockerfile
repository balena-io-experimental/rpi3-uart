FROM resin/raspberrypi3-node:9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD node main.js

ENV INITSYSTEM=on
