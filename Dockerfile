# Build stage
FROM node:20.5.1
WORKDIR /app

#환경 변수를 위한 ARG 정의
ARG REACT_APP_REST_API_KEY
ARG REACT_APP_REDIRECT_URL

# ARG로 받은 환경 변수를 ENV에 설정
ENV REACT_APP_REST_API_KEY=${REACT_APP_REST_API_KEY}
ENV REACT_APP_REDIRECT_URL=${REACT_APP_REDIRECT_URL}

COPY frontend/ ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]