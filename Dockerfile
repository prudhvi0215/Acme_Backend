# Base Image
FROM node:alpine

#Install dependencies
WORKDIR /usr/acmifybackend
COPY ./package.json /usr/acmifybackend
RUN npm install
COPY ./ /usr/acmifybackend

#Startup command
CMD [ "npm", "run", "start" ]



