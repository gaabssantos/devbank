FROM node:18-alpine

WORKDIR /home/app

COPY . ./

RUN npm i

EXPOSE 3333

CMD ["npm", "run", "dev"]