FROM node:14.15.4-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .
EXPOSE 3000

CMD ["yarn", "start"]
