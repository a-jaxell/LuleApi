FROM node:16

WORKDIR /app

ADD package.json /app/package.json
RUN npm cache clean --force

ADD . /app

CMD npm start