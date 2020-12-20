FROM node:12.18.3

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["node", "./dist/server.js"]
