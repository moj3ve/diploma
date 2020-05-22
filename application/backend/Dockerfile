FROM node:12.13.1-alpine3.9

RUN mkdir /app
WORKDIR /app

VOLUME /app
VOLUME /app/node_modules
# VOLUME /app

# COPY package.json package.json

# RUN npm install

COPY . .

CMD npm start