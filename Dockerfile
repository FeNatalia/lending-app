FROM node:14-alpine

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client/. .

RUN npm run build

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server/. .

ENV ARG=${REACT_APP_FIREBASE_API_KEY}

CMD ["npm", "start"]