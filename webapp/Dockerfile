FROM node:14-alpine
ENV CHOKIDAR_USEPOLLING=true
WORKDIR /app

COPY package.json .
RUN yarn install


COPY . .

EXPOSE 3000
ENTRYPOINT ["yarn","start"]