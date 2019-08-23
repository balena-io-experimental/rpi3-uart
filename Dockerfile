FROM balenalib/raspberrypi3-node:12-build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "main.js"]
