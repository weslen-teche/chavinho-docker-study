FROM node:14 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

FROM node:14

RUN mkdir -p /app/dist

WORKDIR /app

COPY package*.json ./

RUN npm i --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3001

ENTRYPOINT ["node", "./dist/server.js"]