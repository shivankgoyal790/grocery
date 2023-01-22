FROM node:16.19-alpine
WORKDIR /grocery-frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm","start"]