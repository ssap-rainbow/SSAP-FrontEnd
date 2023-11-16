# Build stage
FROM node:20.5.1
WORKDIR /app
COPY frontend/ ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]
# "-s" : 어떤 라우팅을 하더라도 index.hml을 찾도록 함.
# 와... -S의 소중함을 알게되었다..😇