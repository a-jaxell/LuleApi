FROM node:16

ADD package.json /app/package.json
RUN npm install

WORKDIR /app
COPY . /app

CMD [npm start]