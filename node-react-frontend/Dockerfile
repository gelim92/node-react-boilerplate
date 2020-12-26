FROM node:12.18.3 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:12.18.3

RUN npm install --global http-server

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build ./public

EXPOSE 3000

CMD ["http-server", "-p", "3000"]
