FROM node:12-alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn start