FROM node:lts-alpine@sha256:ed51af876dd7932ce5c1e3b16c2e83a3f58419d824e366de1f7b00f40c848c40 AS production
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /app
COPY --chown=node:node . /usr/src/app
RUN npm ci --only=production
USER node
CMD ["dumb-init", "npm", "start"]

FROM node:lts-alpine@sha256:ed51af876dd7932ce5c1e3b16c2e83a3f58419d824e366de1f7b00f40c848c40 AS development
RUN apk add dumb-init
ENV NODE_ENV development
WORKDIR /app
COPY package.json /app/
COPY . /app/
RUN npm install && npm cache clean --force
CMD ["dumb-init", "npm", "run", "start:dev"]
