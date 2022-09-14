FROM node:14-alpine as builder

ENV APP_HOME=/home/node

WORKDIR ${APP_HOME}

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . ./

RUN npm run build

FROM nginx:alpine

ENV BUILDER_HOME=/home/node

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder ${BUILDER_HOME}/dist/chavinho-web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
