FROM node:lts-alpine as build-stage

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client/. .

ARG REACT_APP_FIREBASE_API_KEY
ARG REACT_APP_FIREBASE_AUTH_DOMAIN
ARG REACT_APP_FIREBASE_PROJECT_ID
ARG REACT_APP_FIREBASE_STORAGE_BCKT
ARG REACT_APP_FIREBASE_MSG_SENDER_ID
ARG REACT_APP_FIREBASE_APP_ID

RUN npm run build

WORKDIR /app/server

COPY server/package*.json ./

# Install Python to resolve build issue on some macOS versions
RUN apk add --no-cache python3 py3-pip make gcc libsass g++

RUN npm install

COPY server/. .

ENV NODE_ENV=production

CMD ["npm", "start"]