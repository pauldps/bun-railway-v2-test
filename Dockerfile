FROM node:18-bullseye-slim

WORKDIR /app
COPY . /app

RUN npm ci

CMD ["node", "./index.js"]
