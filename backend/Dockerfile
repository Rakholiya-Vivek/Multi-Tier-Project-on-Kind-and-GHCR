FROM node:18-alpine
WORKDIR /app
ENV POSTGRES_HOST=postgres
ENV POSTGRES_PORT=5432
ENV POSTGRES_USER=appuser
ENV POSTGRES_PASSWORD=apppass
ENV POSTGRES_DB=appdb
ENV APP_VERSION=v1
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]

