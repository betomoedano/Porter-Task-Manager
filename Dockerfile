FROM node:16
MAINTAINER label="Rohan Rustagi"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]