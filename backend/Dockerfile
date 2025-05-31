FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

# ✅ Generate Prisma Client at runtime
CMD ["sh", "-c", "npx prisma generate && npx prisma db push && node dist/index.js"]
