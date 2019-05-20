FROM node:10
WORKDIR /tableItPhotosMenuSDC
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]