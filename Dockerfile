FROM node:16

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install

RUN npx prisma db push

RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "start:dev"]