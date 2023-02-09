FROM node:16

WORKDIR /app

ADD package.json /app/package.json
RUN npm cache clean --force
RUN npm install

ADD . /app

CMD [npm run server]