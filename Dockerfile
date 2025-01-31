FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE ${FRONTEND_PORT}
CMD ["npm", "run", "dev"]