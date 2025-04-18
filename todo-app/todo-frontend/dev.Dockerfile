FROM node:22-slim

WORKDIR /usr/src/directory

COPY . .

RUN npm install

CMD ["npm", "run", "dev","--", "--host"]   