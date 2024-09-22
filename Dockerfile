FROM node:20
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3001
RUN npm run build
ENTRYPOINT ["npm", "start"]