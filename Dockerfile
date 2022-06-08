FROM node:16
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .
USER node
ENV NODE_ENV development
CMD [ "npm", "start" ]





