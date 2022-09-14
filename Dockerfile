FROM node:16-slim as builder

WORKDIR /usr

COPY package*.json ./
COPY tsconfig.json ./

COPY src ./src
RUN yarn install
RUN yarn build

FROM node:16-slim
WORKDIR /usr
COPY package*.json ./
RUN yarn install --only=production
COPY --from=builder /usr/dist .

CMD [ "node", "server.js" ]
