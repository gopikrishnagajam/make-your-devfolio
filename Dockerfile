FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN chmod +x scripts/entrypoint.sh

EXPOSE 5173

ENTRYPOINT ["scripts/entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
