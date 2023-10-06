# Node 이미지를 베이스로 사용
FROM node:18

# 작업 디렉터리 설정
WORKDIR /workspace/chatting-web

# 패키지 파일들을 컨테이너 안으로 복사
COPY ./chatting-web/package*.json ./

# 패키지 설치
RUN npm install

# 나머지 소스코드와 리소스를 컨테이너 안으로 복사
COPY ./chatting-web .

# 앱 빌드
RUN npm run build

# 3000 포트로 서비스 시작 (기본 Create React App 포트)
EXPOSE 8081
CMD ["npm", "start"]
