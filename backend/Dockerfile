FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["sh", "-c", "npx prisma generate && npx prisma db push && npx prisma db seed && node dist/index.js"]
