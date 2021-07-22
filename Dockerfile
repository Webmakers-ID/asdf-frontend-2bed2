FROM node:15.11.0
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
