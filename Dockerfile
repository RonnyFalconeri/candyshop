FROM node:10.14-alpine

WORKDIR /opt/app
COPY package.json /opt/app
RUN npm install
COPY . /opt/app

CMD node app.js



