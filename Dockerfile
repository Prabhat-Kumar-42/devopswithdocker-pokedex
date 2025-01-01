FROM node:23-alpine

WORKDIR /usr/src/app

COPY ./package* .

RUN ["npm", "install"]

COPY . .

CMD ["npm", "run", "build"]

CMD ["npm", "run", "start-prod"]
