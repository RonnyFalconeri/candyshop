FROM node:10.14-alpine

WORKDIR /opt/app
COPY public /opt/app
COPY node_modules /opt/app
COPY app.js /opt/app

EXPOSE 3000
CMD node app.js



