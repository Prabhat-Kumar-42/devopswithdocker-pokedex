FROM node:23-alpine

WORKDIR /usr/src/app

COPY ./package* .

RUN ["npm", "install"]

COPY . .

RUN ["npm", "run", "build"]

CMD ["npm", "run", "start-prod"]
