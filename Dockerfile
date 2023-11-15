# Build stage
FROM node:20.5.1
WORKDIR /app
COPY frontend/ ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]